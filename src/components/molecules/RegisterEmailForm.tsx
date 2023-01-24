import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import UserIDSelect from "../atom/RegisterIDSelect";
import useRegisterIDForm from "../../hooks/useRegisterIDForm";
import {namespaces} from "../../i18n/i18n.constants";

const RegisterEmailForm = () => {
    const { userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange} = useRegisterIDForm();
    const {t: translate} = useTranslation(namespaces.pages.registerEmail);

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-primary-color w-full">
                    <label htmlFor="identityNumber" className={`app-label ${userID ? '' : "app-label--hidden"}`}>{translate("email")}</label>
                    <input type="text" placeholder={translate("email") as string}
                           className="app-input"
                           value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserID()} title={translate("next")}/>
        </form>
    );
}

export default RegisterEmailForm;
