import AppNextButton from "../atom/AppNextButton";
import useRegisterNameForm from "../../hooks/useRegisterNameForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import AppFormInput from "../atom/AppFormInput";

const RegisterNameForm = () => {
    const {userName, userSurname, onSubmit, validateNameSurname, onNameChange, onSurnameChange} = useRegisterNameForm();
    const {t: translate} = useTranslation(namespaces.pages.registerName);

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-4">
                <AppFormInput name="name"
                              label={translate("name")}
                              value={userName}
                              onChange={onNameChange}
                              placeholder={translate("name")}
                />
                <AppFormInput name="surname"
                              label={translate("surname")}
                              value={userSurname}
                              onChange={onSurnameChange}
                              placeholder={translate("surname")}
                />
            </div>
            <AppNextButton disabled={!validateNameSurname()} title={translate("next")}/>
        </form>
    );
}

export default RegisterNameForm;
