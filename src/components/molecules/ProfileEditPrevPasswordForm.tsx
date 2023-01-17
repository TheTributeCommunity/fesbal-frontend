import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import useProfileEditPrevPassword from "../../hooks/useProfileEditPrevPassword";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";

const ProfileEditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit} = useProfileEditPrevPassword();
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.profileEditPrevPassword);
    const buttonDisabled = hasError || password.length === 0;

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    <label htmlFor="password" className={`app-label ${password ? '' : 'app-label--hidden'}`}>{translate("placeholder")}</label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder={translate("placeholder") as string}
                            className={`app-input ${hasError ? 'app-input--error' : ''}`}
                        />
                        <div className="app-eye-password" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError && <p className="text-warning-color font-label">{translate("error")}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default ProfileEditPrevPasswordForm;
