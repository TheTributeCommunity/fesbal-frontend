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
    const {t} = useTranslation(namespaces.pages.loginScreen);

    const buttonDisabled = user.id.length !== 9 || user.password.length < 3 || hasError;

    return (
        <form noValidate onSubmit={onSubmit}
              className="mt-8 flex h-full flex-col justify-between self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {user.id.length > 0 &&
                        <label htmlFor="id" className="text-primary-color font-label">{t("id")}</label>}
                    <input
                        type="text"
                        name="id"
                        value={user.id}
                        onChange={onChange}
                        placeholder={t("id") as string}
                        className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    {user.password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color font-label">{t("password")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={user.password}
                            onChange={onChange}
                            placeholder={t("password") as string}
                            className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                        />
                        <div className="absolute top-6 right-4 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-warning-color font-label">{t("error")}</p>}
                    <Link to="/login/password-recovery"
                          className="self-end underline text-secondary-color font-small-link">
                        {t("forgotPassword")}
                    </Link>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="self-center px-6 text-center underline text-secondary-color font-small-link">
                    {t("credentials")}
                </a>
                <AppNextButton disabled={buttonDisabled} title={t("next")}/>
            </div>
        </form>
    );
}

export default LoginForm;
