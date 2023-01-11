import {Link} from "react-router-dom";
import usePasswordRecovery from "../../hooks/usePasswordRecovery";
import AppNextButton from "../atom/AppNextButton";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

const PasswordRecoveryForm = () => {
    const {email, onChange, hasError, onSubmit} = usePasswordRecovery("");

    const {t} = useTranslation(namespaces.pages.passwordRecovery);
    const buttonDisabled = email.length < 6 || hasError;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {email.length > 0 &&
                        <label htmlFor="email" className="text-primary-color">{t("email")}</label>}
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder={t("email") as string}
                        className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                    />
                    {hasError &&
                        <p className="text-red-500 text-sm">{t("error")}</p>}
                    <Link to="/password-recovery"
                          className="text-secondary-color font-bold text-sm self-end underline">
                        {t("forgot")}
                    </Link>
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={t("next")}/>
        </form>
    );
}

export default PasswordRecoveryForm;
