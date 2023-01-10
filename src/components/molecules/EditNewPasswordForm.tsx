import AppNextButton from "../atom/AppNextButton";
import useShowPassword from "../../hooks/useShowPassword";
import useEditNewPassword from "../../hooks/useEditNewPassword";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit, passwordConfirm, onChangeConfirm} = useEditNewPassword()
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {showPassword: showPassword2, toggleShowPassword: toggleShowPassword2} = useShowPassword();
    const {t} = useTranslation(namespaces.pages.editNewPassword);

    const buttonDisabled = hasError || password.length === 0 || passwordConfirm.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color">{t("placeholder")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder={t("placeholder") as string}
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">{t("error")}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                    {passwordConfirm.length > 0 &&
                        <label htmlFor="password-confirm"
                               className="text-primary-color">{t("placeholderConfirm")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword2 ? "text" : "password"}
                            name="password-confirm"
                            value={passwordConfirm}
                            onChange={onChangeConfirm}
                            placeholder={t("placeholderConfirm") as string}
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword2}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">{t("error")}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={t("next")}/>
        </form>
    );
}

export default EditPrevPasswordForm;
