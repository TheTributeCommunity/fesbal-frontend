import {useTranslation} from 'react-i18next'
import {namespaces} from '../i18n/i18n.constants'
import AppWrapper from '../components/molecules/AppWrapper'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../enums/app-route'
import useRegisterBirthDate from '../hooks/useRegisterBirthDate'
import AppCalendar from '../components/atom/AppCalendar'
import AppNextButton from '../components/atom/AppNextButton'
import classNames from 'classnames'
import { RecipientUserService } from '../services/recipient-user-service'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import { useState } from 'react'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'

const ProfileEditBirthDate = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerReferralSendDate)
    const navigate = useNavigate()
    const { selectedDate, setDate, isValidBirthDate } = useRegisterBirthDate()
    const [showErrorDialog, setShowErrorDialog] = useState(false)

    const validForm = () => isValidBirthDate(false)

    const onSubmit = () => {
        if (validForm()) {
            RecipientUserService.update({ dateOfBirth: selectedDate.getTime()}).then(success => {
                if (success) navigate(AppRoute.PROFILE)
                else setShowErrorDialog(true)
            })
        }
    }

    return (
        <AppWrapper title="Editar fecha de nacimiento" showBackButton>
            <div className="flex h-full w-full flex-col self-center gap-4 text-secondary-color">
                <div>
                    <label htmlFor="datePicker" className={classNames({
                        'text-primary-color font-roboto-flex text-xs font-medium': selectedDate,
                        'invisible': !selectedDate,
                    })}>Fecha de nacimiento</label>
                    <AppCalendar id="datePicker" selectedDate={selectedDate} setDate={setDate} placeholder={translate('inputBirthDate') ?? undefined} />
                    {!validForm() && (
                        <p className="text-warning-color font-label pt-2">La fecha debe estar en el pasado</p>
                    )}
                </div>
                <AppNextButton disabled={!validForm()} title="Actualizar" onClick={() => onSubmit()}/>
            </div>
            <AppMessageDialog
                visible={showErrorDialog}
                icon={<UnsuccessIcon />}
                description="La actualización ha fallado, puede intentarlo de nuevo"
                title="Fallo en la actualización"
                buttonText="Intentarlo de nuevo"
                buttonBgColor="bg-warning-color"
                buttonOnClick={() => setShowErrorDialog(false)}
            />
        </AppWrapper>
    )
}

export default ProfileEditBirthDate
