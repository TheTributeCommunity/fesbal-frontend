import AppNextButton from "../atom/AppNextButton";
import useEditPrevPassword from "../../hooks/useEditPrevPassword";
import useShowPassword from "../../hooks/useShowPassword";
import EyeHidePasswordIcon from "../icons/EyeHidePasswordIcon";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit} = useEditPrevPassword();
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.editPrevPassword);

    const buttonDisabled = hasError || password.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color">{translate("placeholder")}</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder={translate("placeholder") as string}
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-primary-color`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeHidePasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">{translate("error")}</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default EditPrevPasswordForm;
