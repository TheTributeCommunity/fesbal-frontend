import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import RegisterEmailForm from '../components/molecules/RegisterEmailForm'
import PageHeader from '../components/molecules/AppPageHeader'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import SuccessIcon from '../components/icons/SuccessIcon'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'

const RegisterEmail = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerEmail)
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showFailureDialog, setShowFailureDialog] = useState(false)

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
            <div className="flex flex-col">
                <PageHeader title={translate('title')} description={translate('description') as string} />
                <RegisterEmailForm onSubmit={handleSubmit}/>
                {showSuccessDialog && (
                    <AppMessageDialog
                        icon={<SuccessIcon />}
                        description={translate('successfulValidationMessage')}
                        title={translate('successfulValidationTitle')}
                        buttonText={translate('continue')}
                        buttonOnClick={() => {
                            setShowSuccessDialog(false)
                            navigate(AppRoute.REGISTER_FAMILY_MEMBERS)
                        }}
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
            </div>
        </AppWrapper>
    )
}

export default RegisterEmail
