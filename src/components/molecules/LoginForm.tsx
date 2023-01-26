import AppNextButton from "../atom/AppNextButton";
import useLoginForm from "../../hooks/useLoginForm";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";

const LoginForm = () => {
    const NEXT_BUTTON_ID = "continue-button-id";
    const {userPhone, onUserPhoneChange, validateUserPhone, hasError, onSubmit} = useLoginForm(NEXT_BUTTON_ID);
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-8">
                <AppFormInput
                    label={translate("phone")}
                    name="phone"
                    value={userPhone}
                    onChange={(e) => onUserPhoneChange(e.target.value)}
                    placeholder={translate("phone")}
                    hasError={hasError}
                />
            </div>
            <div className="flex flex-col gap-4">
                <AppNextButton disabled={!validateUserPhone()} title={translate("next")} id={NEXT_BUTTON_ID}/>
            </div>
        </form>
    );
}

export default LoginForm;
