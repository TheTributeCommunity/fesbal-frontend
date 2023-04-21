import ValidatePhoneForm from '../components/molecules/ValidatePhoneForm'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import { useState } from 'react'
import AppWrapper from '../components/molecules/AppWrapper'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import SuccessIcon from '../components/icons/SuccessIcon'
import { useNavigate } from 'react-router-dom'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'
import {AppRoute} from '../enums/app-route'
import { RecipientUserService } from '../services/recipient-user-service'
import { AuthService } from '../services/auth-service'

const ProfileEditValidatePhone = () => {
    const { t: translate } = useTranslation(namespaces.pages.validatePhone)
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showFailureDialog, setShowFailureDialog] = useState(false)
    const [showBoosterFailureDialog, setShowBoosterFailureDialog] = useState(false)

    const navigate = useNavigate()

    const handleSubmit = (success: boolean) => {
        if (success) {
            setShowSuccessDialog(true)
        } else {
            setShowFailureDialog(true)
        }
    }

    return (
        <AppWrapper showBackButton title={translate('headerTitle')}>
            <ValidatePhoneForm onSubmit={handleSubmit} mode="edit" />
            {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate('successfulValidationMessage')}
                    title={translate('successfulValidationTitle')}
                    buttonText={translate('next')}
                    buttonOnClick={() => navigate(AppRoute.PROFILE)}
                />
            )}
            {showFailureDialog && (
                <AppMessageDialog
                    icon={<UnsuccessIcon />}
                    description={translate('unsuccessfulValidationMessage')}
                    title={translate('unsuccessfulValidationTitle')}
                    buttonText={translate('tryAgainButton')}
                    buttonBgColor="bg-warning-color"
                    buttonOnClick={() => setShowFailureDialog(false)}
                />
            )}
            {showBoosterFailureDialog && (
                <AppMessageDialog
                    icon={<UnsuccessIcon />}
                    description="Para hacer log in"
                    title={translate('unsuccessfulValidationTitle')}
                    buttonText={translate('tryAgainButton')}
                    buttonBgColor="bg-warning-color"
                    buttonOnClick={() => setShowFailureDialog(false)}
                />
            )}
        </AppWrapper>
    )
}

export default ProfileEditValidatePhone
