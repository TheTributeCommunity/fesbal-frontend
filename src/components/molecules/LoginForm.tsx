import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import useLoginForm from "../../hooks/useLoginForm";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";

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
        <form noValidate onSubmit={onSubmit} className="mt-8 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-8">
                <AppFormInput
                    label={translate("id")}
                    name="id"
                    value={user.id}
                    onChange={onChange}
                    placeholder={translate("id")}
                    hasError={hasError}
                />
                <div className="flex flex-col gap-2">
                    <AppFormInput label={translate("password")}
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  value={user.password}
                                  onChange={onChange}
                                  placeholder={translate("password")}
                                  hasError={hasError}
                                  toggleShowPassword={toggleShowPassword}
                                  error={translate("error") as string}
                    />
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
