import { useTranslation } from 'react-i18next'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppReferralForm from '../components/molecules/AppReferralForm'
import AppWrapper from '../components/molecules/AppWrapper'
import { namespaces } from '../i18n/i18n.constants'

const RegisterReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferral)

    return (
        <AppWrapper title={translate('headerTitle')} showBackButton showBurger>
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader title={translate('title')} description={translate('description') as string}/>
                <AppReferralForm link="/register/request-sent" showSublink/>
            </div>
        </AppWrapper>
    )
}

export default RegisterReferral
