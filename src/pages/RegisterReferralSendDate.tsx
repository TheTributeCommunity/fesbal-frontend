import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {namespaces} from '../i18n/i18n.constants'
import AppReferralSendDateForm from '../components/molecules/AppReferralSendDateForm'
import AppPageHeader from '../components/molecules/AppPageHeader'
import AppWrapper from '../components/molecules/AppWrapper'
import {AppRoute} from '../enums/app-route'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import AlertIcon from '../components/icons/AlertIcon'

const RegisterReferralSendDate = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferralSendDate)
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)

    const onSubmit = () => {
        setShowConfirmDialog(true)
    }

    const selectSubmit = () => {
        // TODO: submit form
        setShowConfirmDialog(false)
    }

    const selectCancel = () => {
        setShowConfirmDialog(false)
    }


    return (
        <AppWrapper title={translate('headerTitle')} showBackButton>
            <div className="flex h-full w-full flex-col self-center text-secondary-color">
                <AppPageHeader title={translate('title')} description={translate('description') as string}/>
                <AppReferralSendDateForm onSubmit={onSubmit}/>
            </div>
            <AppMessageDialog
                visible={showConfirmDialog}
                icon={<AlertIcon />}
                description={translate('adviceDescription')}
                title={translate('adviceTitle')}
                buttonText={translate('adviceConfirm')}
                buttonOnClick={selectSubmit}
                secondaryButtonText={translate('adviceCancel')}
                secondaryButtonOnClick={selectCancel}
                secondaryButtonBgColor="bg-warning-color"
            />
        </AppWrapper>
    )
}

export default RegisterReferralSendDate
