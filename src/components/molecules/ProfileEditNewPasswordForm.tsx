import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import useProfileEditNewPassword from "../../hooks/useProfileEditNewPassword";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";
import AppFormInput from "../atom/AppFormInput";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit, passwordConfirm, onChangeConfirm} = useProfileEditNewPassword()
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {showPassword: showPassword2, toggleShowPassword: toggleShowPassword2} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.profileEditNewPassword);

    const buttonDisabled = hasError || password.length === 0 || passwordConfirm.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="app-form">
            <div className="flex flex-col gap-8">
                <AppFormInput label={translate("placeholder")}
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={password}
                              onChange={onChange}
                              placeholder={translate("placeholder")}
                              hasError={hasError}
                              error={translate("error") as string}
                              toggleShowPassword={toggleShowPassword}
                />
                <AppFormInput label={translate("placeholderConfirm")}
                                type={showPassword2 ? "text" : "password"}
                                name="password-confirm"
                                value={passwordConfirm}
                                onChange={onChangeConfirm}
                                placeholder={translate("placeholderConfirm")}
                                hasError={hasError}
                                error={translate("error") as string}
                                toggleShowPassword={toggleShowPassword2}
                />
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default EditPrevPasswordForm;
