import AppNextButton from "../atom/AppNextButton";
import useEntityLoginForm from "../../hooks/useEntityLoginForm";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";
import useShowPassword from "../../hooks/useShowPassword";
import {Link} from "react-router-dom";
import {AppRoute} from "../../enums/app-route";

interface LoginFormProps {
    onSubmit: (success: boolean) => void;
}

const LoginForm = ({onSubmit: parentOnSubmit}: LoginFormProps) => {
    const {user, onUserChange, hasError, onSubmit, validateUser} = useEntityLoginForm();
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.entityLogin);

    const onSubmitWrapper = (e: React.FormEvent<HTMLFormElement>) => {
        onSubmit(e).then((result) => {
            parentOnSubmit(result)
        })
    }
    const disabled = !validateUser() || hasError;

    return (
        <form noValidate onSubmit={onSubmitWrapper} className="mt-8 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-8">
                <AppFormInput
                    label={translate("email")}
                    name="email"
                    value={user.email}
                    onChange={onUserChange}
                    placeholder={translate("email")}
                    hasError={hasError}
                />
            </div>
            <div className="flex flex-col gap-2">
                <AppFormInput
                    label={translate("password")}
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={user.password}
                    onChange={onUserChange}
                    placeholder={translate("password")}
                    hasError={hasError}
                    toggleShowPassword={toggleShowPassword}
                    error={translate("error") as string}
                />
                <Link to={AppRoute.ENTITY_LOGIN_PASSWORD_RECOVERY}
                      className="self-end underline font-small-link text-secondary-color">
                    {translate("forgotPassword")}
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                <AppNextButton disabled={disabled} title={translate("next")}/>
            </div>
        </form>
    );
}

export default LoginForm;
