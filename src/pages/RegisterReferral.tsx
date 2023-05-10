import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import BlankStage from '../components/atom/BlankStage'
import Spinner from '../components/atom/Spinner'
import SuccessIcon from '../components/icons/SuccessIcon'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppReferralForm from '../components/molecules/AppReferralForm'
import AppWrapper from '../components/molecules/AppWrapper'
import { AppRoute } from '../enums/app-route'
import { useEntities } from '../hooks/useEntities'
import { namespaces } from '../i18n/i18n.constants'

const RegisterReferral = () => {
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showFailureDialog, setShowFailureDialog] = useState(false)
    const { entityOptions, loading } = useEntities()
    const {t: translate} = useTranslation(namespaces.pages.registerReferral)
    const navigate = useNavigate()

    const onSubmit = (success: boolean) => {
        if (success) setShowSuccessDialog(true)
        else setShowFailureDialog(true)
    }

    if (loading) return (
        <BlankStage>
            <Spinner />
        </BlankStage>)

    return (
        <AppWrapper showBackButton bgOpaque title="Adjunta tu hoja de derivación">
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader title={translate('title')} description={[translate('description1') as string, translate('description2') as string]}/>
                <AppReferralForm showSubLink onSubmit={onSubmit} entities={entityOptions} />
            </div>
            {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate('successfulValidationMessage')}
                    title={translate('successfulValidationTitle')}
                    buttonText={translate('continue')}
                    buttonOnClick={() => {
                        setShowSuccessDialog(false)
                        navigate(AppRoute.RECIPIENT_HOME)
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
        </AppWrapper>
    )
}

export default RegisterReferral
