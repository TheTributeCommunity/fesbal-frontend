import { useTranslation } from "react-i18next";
import AppFormInput from "../components/atom/AppFormInput";
import AppNextButton from "../components/atom/AppNextButton";
import AppWrapper from "../components/molecules/AppWrapper";
import useRegisterIDForm from "../hooks/useRegisterIDForm";
import useRegisterNameForm from "../hooks/useRegisterNameForm";
import { namespaces } from "../i18n/i18n.constants";
import UserIDSelect from "../components/atom/RegisterIDSelect";
import classNames from "classnames";
import useRegisterBirthDate from "../hooks/useRegisterBirthDate";
import AppCalendar from "../components/atom/AppCalendar";
import FamilyMember from "../types/FamilyMember";
import {AppRoute} from "../enums/app-route";
import {FormEvent} from "react";
import {UserGuestService} from "../services/user-guest-service";
import {useNavigate} from "react-router-dom";
import {RecipientUserService} from "../services/recipient-user-service";
import {RelativeService} from "../services/relative-service";

interface AddFamilyMemberProps {
    member?: FamilyMember
}

const AddFamilyMember = ({member}: AddFamilyMemberProps): JSX.Element => {
    const {userName, userSurname, validateNameSurname, onNameChange, onSurnameChange} = useRegisterNameForm();
    const {selectedOption, userID, validateUserID, onUserIDChange, onSelectedOptionChange} = useRegisterIDForm();
    const {selectedDate, setDate, isValidBirthDate} = useRegisterBirthDate()
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers);

    const selectOptions: string[] = ['DNI', 'NIE'];
    const navigate = useNavigate();

    const validForm = (): boolean => {
        return validateNameSurname() && validateUserID() && isValidBirthDate()
    }

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validForm()) {
            const userGuest = UserGuestService.create(userName, userSurname, selectedDate, selectedOption, userID);
            console.log('user guest', userGuest)

            RecipientUserService.getAuth()
                .then((recipientUser) =>
                    RelativeService.create({...userGuest,recipientUserId: recipientUser.id})
                )
                .then(() => new Promise(r => setTimeout(r, 1000)))
                .then(() => navigate(AppRoute.REGISTER_FAMILY_MEMBERS))
                .catch((e) => console.log(e))
            
        }
    }

    return (
        <AppWrapper link={AppRoute.REGISTER_FAMILY_MEMBERS} title={translate("addMember")}>
            <form noValidate onSubmit={onSubmit} className="flex w-full flex-col gap-4">
                <div className="flex flex-col gap-4">
                    <AppFormInput name="name"
                                label={translate("inputName")}
                                value={userName}
                                onChange={onNameChange}
                                placeholder={translate("inputName")}  
                    />
                    <AppFormInput name="surname"
                                label={translate("inputSurname")}
                                value={userSurname}
                                onChange={onSurnameChange}
                                placeholder={translate("inputSurname")}
                    />
                    <div className="">
                        <label htmlFor="datePicker" className={classNames({
                            'text-primary-color font-roboto-flex text-xs font-medium': selectedDate,
                            'invisible': !selectedDate,
                        })}>{translate('inputBirthDate')}</label>
                      <AppCalendar id="datePicker" selectedDate={selectedDate} setDate={setDate} placeholder={translate("inputBirthDate") ?? undefined} />
                    </div>
                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col gap-1.5 text-primary-color">
                            <label htmlFor="identityType"
                                className={`app-label ${selectedOption ? '' : "app-label--hidden"}`}>{translate("inputIdType")}</label>
                            <UserIDSelect placeholder={translate('inputIdType') ?? ''} options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                        </div>
                        <div className="flex flex-col gap-1.5 text-primary-color w-full">
                            <label htmlFor="identityNumber" className={`app-label ${userID ? '' : "app-label--hidden"}`}>{translate("inputId")}</label>
                            <input type="text" placeholder={translate("inputId") as string}
                                className="app-input"
                                value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                        </div>
                    </div>
                </div>
                <AppNextButton disabled={!validForm()} title={translate("addMember")}/>
            </form>
        </AppWrapper>
    )
}

export default AddFamilyMember;