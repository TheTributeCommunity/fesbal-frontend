import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import useLoginPasswordRecovery from "../../hooks/useLoginPasswordRecovery";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";

const LoginPasswordRecoveryForm = () => {
    const {email, onChange, hasError, onSubmit} = useLoginPasswordRecovery("");

    const {t: translate} = useTranslation(namespaces.pages.loginPasswordRecovery);
    const buttonDisabled = email.length < 6 || hasError;

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className={`app-label ${email ? '' : 'app-label--hidden'}`}>{translate("email")}</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder={translate("email") as string}
                        className={`app-input ${hasError ? 'app-input--error' : ''}`}
                    />
                    {hasError && <p className="text-warning-color font-label">{translate("error")}</p>}
                    <Link to="/login/password-recovery" className="self-end underline font-small-link">
                        {t("forgot")}
                    </Link>
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default LoginPasswordRecoveryForm;
