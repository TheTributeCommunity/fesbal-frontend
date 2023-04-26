import React, {useCallback, useMemo, useRef, useState} from 'react'
import RightArrowIcon from '../icons/RightArrowIcon'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../../i18n/i18n.constants'

interface SwipeButtonProps {
    onConfirm: () => void;
}

const SwipeButton = ({onConfirm}: SwipeButtonProps) => {
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [progress, setProgress] = useState(0)

    const {t: translate} = useTranslation(namespaces.pages.entityUserSignature)

    const buttonRef = useRef<HTMLDivElement>(null)

    const handleSlideStart = useCallback(() => {
        setIsConfirmed(false)
    }, [])

    const handleSlideUpdate = useCallback(
        (event: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
            const {buttons} = event
            if (buttons === 1 && buttonRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect()
                const buttonStyle = window.getComputedStyle(buttonRef.current)
                const borderLeftWidth = parseInt(buttonStyle.borderLeftWidth, 10)
                const borderRightWidth = parseInt(buttonStyle.borderRightWidth, 10)
                const paddingLeft = parseInt(buttonStyle.paddingLeft, 10)
                const paddingRight = parseInt(buttonStyle.paddingRight, 10)
                const contentWidth =
                    buttonRect.width -
                    borderLeftWidth -
                    borderRightWidth -
                    paddingLeft -
                    paddingRight
                const newProgress = Math.max(
                    0,
                    Math.min(1, (event.clientX - buttonRect.left) / contentWidth)
                )
                setProgress(newProgress)
            }
        },
        []
    )

    const handleSlideEnd = useCallback(() => {
        if (progress === 1) {
            setIsConfirmed(true)
            onConfirm()
        } else {
            setIsConfirmed(false)
            setProgress(0)
        }
    }, [progress, onConfirm])

    const handleTouchSlideUpdate = useCallback(
        (event: React.TouchEvent<HTMLDivElement>) => {
            const touch = event.touches[0]
            const fakeMouseEvent = {
                buttons: 1,
                clientX: touch.clientX,
                currentTarget: event.currentTarget,
            } as React.MouseEvent<HTMLDivElement>
            handleSlideUpdate(fakeMouseEvent)
        },
        [handleSlideUpdate]
    )

    const buttonBlueWidthInPercent = useMemo(() => progress * 100, [progress])
    const buttonBlueInitialWidthInRem = 5

    return (
        <div
            ref={buttonRef}
            className={
                'flex items-center rounded-2xl border border-primary-color h-16 bg-ghost-white w-full touch-none' +
                ' font-roboto-flex' +
                ' text-button relative ' +
                (isConfirmed ? 'cursor-default pointer-events-none' : 'cursor-grab')
            }
            role="button"
            aria-label="Swipe to confirm"
            onMouseDown={handleSlideStart}
            onMouseMove={handleSlideUpdate}
            onMouseUp={handleSlideEnd}
            onMouseLeave={handleSlideEnd}
            onTouchStart={handleSlideStart}
            onTouchMove={handleTouchSlideUpdate}
            onTouchEnd={handleSlideEnd}
        >
            <div
                className={
                    'flex items-center h-full rounded-2xl bg-primary-color justify-between text-white z-10 px-7 ' +
                    (isConfirmed ? '' : 'w-full')
                }
                style={{
                    width: `${buttonBlueWidthInPercent}%`,
                    minWidth: `${buttonBlueInitialWidthInRem}rem`,
                }}
            >
                {isConfirmed ? (
                    <>
                        <div></div>
                        <span>{translate('signed')}</span>
                        <RightArrowIcon/>
                    </>
                ) : (
                    <>
                        <div></div>
                        <div></div>
                        <RightArrowIcon/>
                    </>
                )}
            </div>
            {!isConfirmed && (
                <div
                    className="rounded-2xl text-center text-primary-color absolute inset-0 flex items-center justify-center">
                    <span>{translate('swipeToSign')}</span>
                </div>
            )}
        </div>
    )
}

export default SwipeButton
