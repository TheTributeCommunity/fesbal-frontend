import AppFormInput from '../components/atom/AppFormInput'
import AppNextButton from '../components/atom/AppNextButton'
import AppWrapper from '../components/molecules/AppWrapper'
import useRegisterNameForm from '../hooks/useRegisterNameForm'
import {FormEvent, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {AppRoute} from '../enums/app-route'
import { RecipientUserService } from '../services/recipient-user-service'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'

const ProfileEditNameAndSurname = (): JSX.Element => {
    const {userName, userSurname, validateNameSurname, onNameChange, onSurnameChange} = useRegisterNameForm()
    const navigate = useNavigate()
    const [showErrorDialog, setShowErrorDialog] = useState(false)

    const validForm = (): boolean => {
        return validateNameSurname()
    }
    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validForm()) {
            RecipientUserService.update({ firstName: userName, lastName: userSurname}).then(success => {
                if (success) navigate(AppRoute.PROFILE)
                else setShowErrorDialog(true)
            })
        }
    }

    return (
        <AppWrapper showBackButton title="Editar nombre y apellidos">
            <form noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <AppFormInput name="name"
                        label="Nombre"
                        value={userName}
                        onChange={onNameChange}
                        placeholder="Nombre"  
                    />
                    <AppFormInput name="surname"
                        label="Apellidos"
                        value={userSurname}
                        onChange={onSurnameChange}
                        placeholder="Apellidos"
                    />
                </div>
                <AppNextButton disabled={!validForm()} title="Actualizar" />
            </form>
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

export default ProfileEditNameAndSurname