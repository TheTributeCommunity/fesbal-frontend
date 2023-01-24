import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import {namespaces} from "../../i18n/i18n.constants";
import useRegisterEmail from "../../hooks/useRegisterEmail";

const RegisterEmailForm = () => {
    const { userEmail, hasError, onSubmit, validateUserEmail, onUserEmailChange} = useRegisterEmail();
    const {t: translate} = useTranslation(namespaces.pages.registerEmail);

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-primary-color w-full">
                    <label htmlFor="email" className={`app-label ${userEmail ? '' : "app-label--hidden"}`}>{translate("email")}</label>
                    <input type="text" placeholder={translate("email") as string}
                           className={`app-input ${hasError ? "app-input--error" : ""}`}
                           value={userEmail} onChange={(e) => onUserEmailChange(e.target.value)}/>
                    {hasError && (
                        <p className="text-warning-color font-label">{translate('error')}</p>
                    )}
                </div>
            </div>
            <AppNextButton disabled={!validateUserEmail()} title={translate("next")}/>
        </form>
    );
}

export default RegisterEmailForm;
