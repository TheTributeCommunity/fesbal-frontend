import { useTranslation } from "react-i18next";
import AppFormInput from "../components/atom/AppFormInput";
import AppNextButton from "../components/atom/AppNextButton";
import AppWrapper from "../components/molecules/AppWrapper";
import useRegisterFamilyMembers from "../hooks/useRegisterFamilyMembers";
import useRegisterIDForm from "../hooks/useRegisterIDForm";
import useRegisterNameForm from "../hooks/useRegisterNameForm";
import { namespaces } from "../i18n/i18n.constants";
import UserIDSelect from "../components/atom/RegisterIDSelect";
import classNames from "classnames";
import useRegisterBirthDate from "../hooks/useRegisterBirthDate";
import AppCalendar from "../components/atom/AppCalendar";

const RegisterUser = (): JSX.Element => {
    const {userName, userSurname, validateNameSurname, onNameChange, onSurnameChange} = useRegisterNameForm();
    const {familyMembers, setFamilyMembers} = useRegisterFamilyMembers();
    const {selectedOption, userID, validateUserID, onUserIDChange, onSelectedOptionChange} = useRegisterIDForm();
    const {selectedDate, setDate, isValidBirthDate, getFormattedBirthDate} = useRegisterBirthDate()
    const {t: translate} = useTranslation(namespaces.pages.registerUser);

    const selectOptions: string[] = ['DNI', 'NIE'];

    const validForm = (): boolean => {
        return validateNameSurname() && validateUserID() && isValidBirthDate()
    }

    return (
        <AppWrapper link="/welcome" title={translate("title")}>
            <form noValidate onSubmit={undefined} className="flex w-full flex-col gap-4">
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
                <AppNextButton disabled={!validForm()} title={translate("submit")}/>
            </form>
        </AppWrapper>
    )
}

export default RegisterUser;