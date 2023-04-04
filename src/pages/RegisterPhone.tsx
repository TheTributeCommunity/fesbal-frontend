import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import PageHeader from '../components/molecules/AppPageHeader'
import RegisterPhoneForm from '../components/molecules/RegisterPhoneForm'
import AppWrapper from '../components/molecules/AppWrapper'
import {AppRoute} from '../enums/app-route'
import { useNavigate } from 'react-router'

const RegisterPhone = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerPhone)
    const navigate = useNavigate()

    const handleSubmit = (success: boolean) => {
        if (success) {
            navigate(AppRoute.REGISTER_VALIDATE_PHONE)
        }
    }

    return (
        <AppWrapper showBackButton title={translate('title')}>
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <PageHeader title={translate('titleSecondary')} description={translate('description') as string}/>
                <RegisterPhoneForm onSubmit={handleSubmit}/>
            </div>
        </AppWrapper>
    )
}

export default RegisterPhone
