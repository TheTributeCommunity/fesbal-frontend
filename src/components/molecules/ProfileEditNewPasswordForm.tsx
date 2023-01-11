import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import useProfileEditNewPassword from "../../hooks/useProfileEditNewPassword";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit, passwordConfirm, onChangeConfirm} = useProfileEditNewPassword()
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {showPassword: showPassword2, toggleShowPassword: toggleShowPassword2} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.profileEditNewPassword);

    const buttonDisabled = hasError || password.length === 0 || passwordConfirm.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="mt-8 flex h-full w-full flex-col justify-between self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color font-label">{t("placeholder")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder={translate("placeholder") as string}
                            className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                        />
                        <div className="absolute top-6 right-4 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-sm text-warning-color">{translate("error")}</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                    {passwordConfirm.length > 0 &&
                        <label htmlFor="password-confirm"
                               className="text-primary-color font-label">{translate("placeholderConfirm")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword2 ? "text" : "password"}
                            name="password-confirm"
                            value={passwordConfirm}
                            onChange={onChangeConfirm}
                            placeholder={t("placeholderConfirm") as string}
                            className={`${hasError ? 'text-warning-color' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color font-input`}
                        />
                        <div className="absolute top-6 right-4 cursor-pointer" onClick={toggleShowPassword2}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-warning-color font-label">{translate("error")}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default EditPrevPasswordForm;
