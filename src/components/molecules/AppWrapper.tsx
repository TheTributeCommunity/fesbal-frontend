import classNames from 'classnames'
import { ReactNode } from 'react'
import AppBackButton from '../atom/AppBackButton'
import AppBurgerMenuButton from '../atom/AppBurgerMenuButton'

interface AppWrapperProps {
    title?: string | null,
    titleClassName?: string,
    containerClassName?: string,
    showBurger?: boolean
    showBackButton?: boolean
    children?: ReactNode
}

const AppWrapper = ({title, titleClassName = '', showBurger = false, showBackButton = true, children, containerClassName = ''} : AppWrapperProps): JSX.Element => {
    return (
        // We set the height to the screen, and then set the
        // height to 100dvh - this is because some browsers
        // do not yet support dynamic viewport, so in the event
        // it doesn't support it, it stays as viewport height
        <div className="bg-page h-screen h-[100dvh]">
            <div className={`flex flex-col justify-center mx-auto w-full md:w-1/2 lg:w-1/3 p-8 h-full ${containerClassName}`}>
                <div className="flex flex-row fixed w-full md:w-1/2 lg:w-1/3 px-8 py-4 top-0 left-0 right-0 mx-auto bg-white">
                    <div className="w-1/4 flex flex-row justify-start">
                        {showBackButton && <AppBackButton />}
                    </div>
                    <div className="w-1/2 text-center flex flex-row justify-center items-center">
                        <span className={classNames({
                            'font-roboto-flex font-bold text-base leading-6 text-primary-color': !titleClassName,
                            [titleClassName]: titleClassName,
                        })}>{title}</span>
                    </div>
                    <div className="w-1/4 flex flex-row justify-end">
                        {showBurger && <AppBurgerMenuButton />}
                    </div>
                </div>
                <div className="flex flex-col gap-1 w-full h-full overflow-y-auto pt-16 mx-auto">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default AppWrapper
