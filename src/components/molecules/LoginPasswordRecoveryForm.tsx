import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import useLoginPasswordRecovery from "../../hooks/useLoginPasswordRecovery";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";

const LoginPasswordRecoveryForm = () => {
    const {email, onChange, hasError, onSubmit} = useLoginPasswordRecovery("");

    const {t} = useTranslation(namespaces.pages.loginPasswordRecovery);
    const buttonDisabled = email.length < 6 || hasError;

    return (
        <form noValidate onSubmit={onSubmit}
              className="mt-8 flex h-full w-full flex-col justify-between self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {email.length > 0 &&
                        <label htmlFor="email" className="text-primary-color font-label">{t("email")}</label>}
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder={t("email") as string}
                        className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                    />
                    {hasError &&
                        <p className="text-warning-color font-label">{t("error")}</p>}
                    <Link to="/password-recovery" className="self-end underline text-secondary-color font-small-link">
                        {t("forgot")}
                    </Link>
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={t("next")}/>
        </form>
    );
}

export default LoginPasswordRecoveryForm;
