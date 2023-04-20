import { useTranslation } from 'react-i18next'
import AppFormInput from '../components/atom/AppFormInput'
import AppNextButton from '../components/atom/AppNextButton'
import AppWrapper from '../components/molecules/AppWrapper'
import useRegisterIDForm from '../hooks/useRegisterIDForm'
import { v4 as uuidv4 } from 'uuid'
import useRegisterNameForm from '../hooks/useRegisterNameForm'
import { namespaces } from '../i18n/i18n.constants'
import UserIDSelect from '../components/atom/RegisterIDSelect'
import classNames from 'classnames'
import useRegisterBirthDate from '../hooks/useRegisterBirthDate'
import AppCalendar from '../components/atom/AppCalendar'
import {AppRoute} from '../enums/app-route'
import {FormEvent, useContext, useEffect, useState} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {RelativeService} from '../services/relative-service'
import { UsersContext } from '../contexts/usersContext'
import { Relative, RelativeMutate } from '../models/relative'
import { IDtypes } from '../enums/IDtypes.ts'
import AppMessageDialog from '../components/molecules/AppMessageDialog'
import UnsuccessIcon from '../components/icons/UnsuccessIcon'

const AddFamilyMember = (): JSX.Element => {
    const {userName, userSurname, validateNameSurname, onNameChange, onSurnameChange, setUserName, setUserSurname} = useRegisterNameForm()
    const {selectedOption, userID, validateUserID, onUserIDChange, onSelectedOptionChange, setSelectedOption, setUserID} = useRegisterIDForm()
    const {selectedDate, setDate, isValidBirthDate} = useRegisterBirthDate()
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers)
    const { firebaseUser } = useContext(UsersContext)
    const location = useLocation()
    const memberData = location.state?.relative as Relative
    const [mode, setMode] = useState('create')
    const [editID, setEditID] = useState('')
    const [showErrorDialog, setShowErrorDialog] = useState(false)

    useEffect(() => {
        if (memberData) {
            // we have been given a member to edit
            setMode('edit')
            setEditID(memberData.id)
            setUserName(memberData.firstName)
            setUserSurname(memberData.lastName)
            setDate(memberData.dateOfBirth)
            memberData.typeOfIdentityDocument && setSelectedOption(memberData.typeOfIdentityDocument)
            memberData.identityDocumentNumber && setUserID(memberData.identityDocumentNumber)
        }
    }, [])

    const selectOptions: string[] = Object.values(IDtypes)
    const navigate = useNavigate()

    const validForm = (): boolean => {
        return validateNameSurname() && validateUserID(selectedDate) && isValidBirthDate()
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validForm() && firebaseUser?.uid) {
            const relative: Partial<RelativeMutate> = {
                relativeId: mode === 'create' ? uuidv4() : editID,
                firstName: userName,
                lastName: userSurname,
                dateOfBirth: selectedDate.toLocaleDateString('es-ES'),
            }
            if (mode === 'create') relative.recipientUserId = firebaseUser.uid
            if (selectedOption && userID) {
                relative.typeOfIdentityDocument = selectedOption
                relative.identityDocumentNumber = userID
            }
            const operation = mode === 'create' ? RelativeService.create : RelativeService.update
            operation(relative)
                .then(success => {
                    if (success) navigate(AppRoute.REGISTER_FAMILY_MEMBERS)
                    else setShowErrorDialog(true)
                })
                .catch((e) => {
                    console.log(e)
                    setShowErrorDialog(true)
                })
        }
    }

    return (
        <AppWrapper showBackButton title={mode === 'create' ? translate('addMember') : 'Editar familiar'}>
            <form noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <AppFormInput name="name"
                        label={translate('inputName')}
                        value={userName}
                        onChange={onNameChange}
                        placeholder={translate('inputName')}  
                    />
                    <AppFormInput name="surname"
                        label={translate('inputSurname')}
                        value={userSurname}
                        onChange={onSurnameChange}
                        placeholder={translate('inputSurname')}
                    />
                    <div className="">
                        <label htmlFor="datePicker" className={classNames({
                            'text-primary-color font-roboto-flex text-xs font-medium': selectedDate,
                            'invisible': !selectedDate,
                        })}>{translate('inputBirthDate')}</label>
                        <AppCalendar id="datePicker" selectedDate={selectedDate} setDate={setDate} placeholder={translate('inputBirthDate') ?? undefined} />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-1.5 text-primary-color">
                            <label htmlFor="identityType"
                                className={`app-label ${selectedOption ? '' : 'app-label--hidden'}`}>{translate('inputIdType')}</label>
                            <UserIDSelect placeholder={translate('inputIdType') ?? ''} options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                        </div>
                        <div className="flex flex-col gap-1.5 text-primary-color w-full">
                            <label htmlFor="identityNumber" className={`app-label ${userID ? '' : 'app-label--hidden'}`}>{translate('inputId')}</label>
                            <input type="text" placeholder={translate('inputId') as string}
                                className="app-input"
                                value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <AppNextButton disabled={!validForm()} title={mode === 'create' ? translate('addMember') : 'Editar familiar'}/>
            </form>
            <AppMessageDialog
                visible={showErrorDialog}
                icon={<UnsuccessIcon />}
                description="La operacion ha fallado, puedo intentarlo de nuevo"
                title="Fallo en la operación"
                buttonText="Intentarlo de nuevo"
                buttonBgColor="bg-warning-color"
                buttonOnClick={() => setShowErrorDialog(false)}
            />
        </AppWrapper>
    )
}

export default AddFamilyMember