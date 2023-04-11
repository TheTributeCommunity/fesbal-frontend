import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import AppReferralSendDateForm from '../components/molecules/AppReferralSendDateForm'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppWrapper from '../components/molecules/AppWrapper'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../enums/app-route'

const RegisterReferralSendDate = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferralSendDate)
    const navigate = useNavigate()

    const onSubmit = (success: boolean) => {
        if (success) {
            navigate(AppRoute.RECIPIENT_HOME)
        } else console.log('could not send referral date') // TODO inform user of error
    }

    return (
        <AppWrapper title={translate('headerTitle')} showBackButton>
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader title={translate('title')} description={translate('description') as string}/>
                <AppReferralSendDateForm onSubmit={onSubmit}/>
            </div>
        </AppWrapper>
    )
}

export default RegisterReferralSendDate
