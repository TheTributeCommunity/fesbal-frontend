import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import useProfileEditPrevPassword from "../../hooks/useProfileEditPrevPassword";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";
import AppFormInput from "../atom/AppFormInput";

const ProfileEditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit} = useProfileEditPrevPassword();
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.profileEditPrevPassword);
    const buttonDisabled = hasError || password.length === 0;

    return (
        <form noValidate onSubmit={onSubmit} className="mt-8 flex w-full flex-col justify-between gap-4 self-center">
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
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default ProfileEditPrevPasswordForm;
