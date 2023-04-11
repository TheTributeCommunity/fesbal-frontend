import { useTranslation } from 'react-i18next'
import { namespaces } from '../../i18n/i18n.constants'
import AppNextButton from '../atom/AppNextButton'
import AppCalendar from '../atom/AppCalendar'
import { useState } from 'react'
import classNames from 'classnames'
import useRegisterReferralSendDate from '../../hooks/useRegisterReferralSendDate'
import AppMessageDialog from './AppMessageDialog'
import AlertIcon from '../icons/AlertIcon'

interface AppReferralSendDateFormProps {
    onSubmit: (success: boolean) => void
}

const AppReferralSendDateForm =  ({onSubmit: onParentSubmit}: AppReferralSendDateFormProps) => {
    const { selectedDate, setDate, isValidFutureDate, submitRegistrationRequest } = useRegisterReferralSendDate()
    const {t: translate} = useTranslation(namespaces.pages.registerReferralSendDate)
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    
    const selectSubmit = () => {
        setShowConfirmDialog(false)
        submitRegistrationRequest().then(result => onParentSubmit(result))
    }

    const selectCancel = () => {
        setShowConfirmDialog(false)
    }

    const validForm = (): boolean => {
        return isValidFutureDate()
    }

    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 1)

    return (
        <>
            <div
                className="flex w-full flex-col gap-4"
            >
                <div className="flex flex-col gap-4 mt-6 mb-4">
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="datePicker"
                            className={classNames({
                                'text-primary-color font-roboto-flex text-xs font-medium':
                                selectedDate,
                                invisible: !selectedDate,
                            })}
                        >
                            {translate('sendDate')}
                        </label>
                        <AppCalendar
                            id="datePicker"
                            selectedDate={selectedDate || undefined} 
                            setDate={setDate}
                            placeholder={translate('sendDate')}
                        />
                        {!validForm() && selectedDate && <p className="text-warning-color font-label">La fecha seleccionada debe estar en el futuro</p>}
                    </div>
                </div>

                <AppNextButton onClick={() => setShowConfirmDialog(true)} disabled={!validForm()} title={translate('next')} />
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
        </>
    )
}

export default AppReferralSendDateForm