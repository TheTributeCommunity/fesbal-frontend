import classNames from 'classnames'
import {ReactNode} from 'react'
import AppBackButton from '../atom/AppBackButton'
import AppBurgerMenuButton from '../atom/AppBurgerMenuButton'

interface AppWrapperProps {
    title?: string | null,
    titleClassName?: string,
    containerClassName?: string,
    showBurger?: boolean
    showBackButton?: boolean
    children?: ReactNode,
    bgColor?: string
    topbarClassName?: string
    bgOpaque?: boolean
    childrenClassName?: string
}

const AppWrapper = ({
    title,
    titleClassName = '',
    showBurger = false,
    showBackButton = true,
    children,
    containerClassName = '',
    bgColor = 'bg-page',
    topbarClassName,
    bgOpaque = true,
    childrenClassName = '',
}: AppWrapperProps): JSX.Element => {
    return (
        // We set the height to the screen, and then set the
        // height to 100dvh - this is because some browsers
        // do not yet support dynamic viewport, so in the event
        // it doesn't support it, it stays as viewport height
        <div className={`${bgColor} h-screen h-[100dvh]`}>
            <div
                className={`flex flex-col justify-center mx-auto w-full md:w-1/2 lg:w-1/3 p-8 h-full ${containerClassName}`}>
                <div
                    className={`flex flex-row fixed w-full md:w-1/2 lg:w-1/3 px-8 py-4 top-0 left-0 right-0 mx-auto ${bgOpaque ? 'bg-white shadow-md' : ''} ${topbarClassName}`}>
                    <div className="w-1/4 flex flex-row justify-start">
                        {showBackButton && <AppBackButton/>}
                    </div>
                    <div className="w-2/3 text-center flex flex-row justify-center items-center">
                        <span className={classNames({
                            'font-roboto-flex font-bold text-base leading-6 text-primary-color': !titleClassName,
                            [titleClassName]: titleClassName,
                        })}>{title}</span>
                    </div>
                    <div className="w-1/4 flex flex-row justify-end">
                        {showBurger && <AppBurgerMenuButton/>}
                    </div>
                </div>
                <div className={`flex flex-col gap-1 w-full h-full pt-16 mx-auto overflow-y-auto${childrenClassName}`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppWrapper
