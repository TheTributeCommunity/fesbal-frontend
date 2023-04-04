import {namespaces} from '../i18n/i18n.constants'
import EntityLoginPasswordRecoveryForm from '../components/molecules/EntityLoginPasswordRecoveryForm'
import AppPageHeader from '../components/molecules/AppPageHeader'
import {useTranslation} from 'react-i18next'
import AppWrapper from '../components/molecules/AppWrapper'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import SuccessIcon from '../components/icons/SuccessIcon'
import { AppRoute } from '../enums/app-route'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'


const EntityLoginPasswordRecovery = () => {
    const navigate = useNavigate()
    const [showSuccessDialog, setShowSuccessDialog] = useState(false)
    const [showFailureDialog, setShowFailureDialog] = useState(false)

    const {t: translate} = useTranslation(namespaces.pages.entityLoginPasswordRecovery)

    const onSubmit = (success: boolean) => {
        if (success) setShowSuccessDialog(true)
        else setShowFailureDialog(true)
    }

    return (
        <AppWrapper>
            <div className="flex w-full flex-col self-center justify-start">
                <AppPageHeader title={translate('title')} description={translate('description') as string}/>
                <EntityLoginPasswordRecoveryForm onSubmit={onSubmit}/>
            </div>
            {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate('sweetAlert.description')}
                    title={translate('sweetAlert.title')}
                    buttonText={translate('sweetAlert.confirm')}
                    buttonOnClick={() => navigate(AppRoute.ENTITY_LOGIN)}
                />
            )}
            {showFailureDialog && (
                <AppMessageDialog
                    icon={<UnsuccessIcon />}
                    description={translate('sweetAlert.description')}
                    title={translate('sweetAlert.title')}
                    buttonText={translate('sweetAlert.confirm')}
                    buttonBgColor="bg-warning-color"
                    buttonOnClick={() => setShowFailureDialog(false)}
                />
            )}
        </AppWrapper>
    )
}

export default EntityLoginPasswordRecovery
