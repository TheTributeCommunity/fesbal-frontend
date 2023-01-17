import {NavLink} from "react-router-dom";
import useLoginForm from "../../hooks/useLoginForm";
import AppNextButton from "../atom/AppNextButton";
import useShowPassword from "../../hooks/useShowPassword";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

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
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {user.id.length > 0 &&
                        <label htmlFor="id" className="text-primary-color">{translate("id")}</label>}
                    <input
                        type="text"
                        name="id"
                        value={user.id}
                        onChange={onChange}
                        placeholder={translate("id") as string}
                        className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    {user.password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color">{translate("password")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={user.password}
                            onChange={onChange}
                            placeholder={translate("password") as string}
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">{translate("error")}</p>}
                    <NavLink to="/password-recovery"
                             className="text-secondary-color font-bold text-sm self-end underline">
                        {translate("forgotPassword")}
                    </NavLink>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="text-secondary-color font-bold text-sm self-center underline text-center px-6">
                    {translate("credentials")}
                </a>
                <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
            </div>
        </form>
    );
}

export default LoginForm;
