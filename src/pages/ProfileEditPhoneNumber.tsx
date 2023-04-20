import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import PhoneForm from '../components/molecules/PhoneForm'
import AppWrapper from '../components/molecules/AppWrapper'
import {AppRoute} from '../enums/app-route'
import { useNavigate } from 'react-router'

const ProfileEditPhoneNumber = () => {
    const navigate = useNavigate()

    const handleSubmit = (success: boolean) => {
        if (success) {
            navigate(AppRoute.PROFILE_EDIT_VALIDATE_PHONE_NUMBER)
        }
    }

    return (
        <AppWrapper showBackButton title="Cambiar teléfono móvil">
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <PhoneForm onSubmit={handleSubmit} mode="edit"/>
            </div>
        </AppWrapper>
    )
}

export default ProfileEditPhoneNumber
