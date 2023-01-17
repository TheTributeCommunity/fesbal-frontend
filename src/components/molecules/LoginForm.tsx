import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import useLoginForm from "../../hooks/useLoginForm";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";

const LoginForm = () => {
    const {user, onChange, hasError, onSubmit} = useLoginForm(
        {
            id: "",
            password: ""
        });
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    const buttonDisabled = user.id.length !== 9 || user.password.length < 3 || hasError;

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="id" className={`app-label ${user.id ? '' : 'app-label--hidden'}`}>{t("id")}</label>
                    <input
                        type="text"
                        name="id"
                        value={user.id}
                        onChange={onChange}
                        placeholder={translate("id") as string}
                        className={`app-input ${hasError ? 'app-input--error' : ''}`}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password"
                           className={`app-label ${user.password ? '' : 'app-label--hidden'}`}>{t("password")}</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={user.password}
                            onChange={onChange}
                            placeholder={translate("password") as string}
                            className={`app-input ${hasError ? 'app-input--error' : ''}`}
                        />
                        <div className="app-eye-password" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError && <p className="text-warning-color font-label">{translate("error")}</p>}
                    <Link to="/login/password-recovery"
                          className="self-end underline font-small-link">
                        {translate("forgotPassword")}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="self-center px-6 text-center underline font-small-link">
                    {translate("credentials")}
                </a>
                <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
            </div>
        </form>
    );
}

export default LoginForm;
