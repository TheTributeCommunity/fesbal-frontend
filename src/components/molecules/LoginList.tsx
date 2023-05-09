import LogoFesbalWhiteIcon from '../icons/LogoFesbalWhiteIcon'
import {useTranslation} from 'react-i18next'
import {namespaces} from '../../i18n/i18n.constants'
import LoginCard from '../atom/LoginCard'
import { AppRoute } from '../../enums/app-route'

const LoginList = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen)

    return (
        <div className="flex flex-col justify-between h-[calc(100vh-2rem)] mt-8">
            <LoginCard
                title={translate('recipient.title')}
                description={translate('recipient.description')}
                loginText={translate('recipient.login')}
                loginLink={AppRoute.LOGIN}
                backgroundColor={''}
                textColor={'text-secondary-color'}
                buttonBackGroundColor={'bg-primary-color'}
                hasRegisterLink={true}
            />
            <LoginCard
                title={translate('entity.title')}
                description={translate('entity.description')}
                loginText={translate('entity.login')}
                loginLink={AppRoute.ENTITY_LOGIN}
                backgroundColor={'bg-[#0F95CE]'}
                textColor={'text-white'}
                buttonBackGroundColor={'bg-secondary-color'}
            />
        </div>
    )
}

export default LoginList