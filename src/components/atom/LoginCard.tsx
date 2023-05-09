import AppLinkButton from './AppLinkButton'
import SplashCardProps from '../../types/SplashCardProps'
import {Link} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../../i18n/i18n.constants'
import AppLinkExternalButton from './AppLinkExtenernalButton'

const LoginCard = ({title, description, loginText, loginLink, backgroundColor, textColor, buttonBackGroundColor, hasRegisterLink = false}: SplashCardProps) => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen)
    const isAExternalLink = (link: string) => {
        return link.includes('http')
    }

    return (
        <div className={`${backgroundColor} ${textColor} h-1/2`}>
            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pt-16">
                <header className="font-big-title mb-4">{title}</header>
                <div>{description}</div>
                <div className="pt-8 flex flex-col gap-2">
                    { isAExternalLink(loginLink)
                        ? <AppLinkExternalButton bgColor={buttonBackGroundColor} title={loginText} link={loginLink}/>
                        : <AppLinkButton bgColor={buttonBackGroundColor} title={loginText} link={loginLink}/>
                    }
                    {hasRegisterLink && (
                        <>
                            <p className="text-secondary-color text-xs self-center pt-6">¿No tienes cuenta todavía?</p>
                            <Link to="/register/legal"
                                className="self-center text-primary-color text-base font-bold">{'Crea una cuenta nueva'}
                            </Link>
                        </>)
                    }
                </div>
            </div>
        </div>
    )
}

export default LoginCard