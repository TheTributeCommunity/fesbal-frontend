import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import useLoginForm from "../../hooks/useLoginForm";
import useShowPassword from "../../hooks/useShowPassword";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";

const LoginForm = () => {
    const {userEmail, userPassword, onChangeUserEmail, onChangeUserPassword, hasError, onSubmit} = useLoginForm();
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    const buttonDisabled = userEmail.length < 6  || userPassword.length < 3 || hasError;

    return (
        <form noValidate onSubmit={onSubmit} className="mt-8 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-8">
                <AppFormInput
                    label={translate("email")}
                    name="email"
                    value={userEmail}
                    onChange={(e) => onChangeUserEmail(e.target.value)}
                    placeholder={translate("email")}
                    hasError={hasError}
                />
                <div className="flex flex-col gap-2">
                    <AppFormInput label={translate("password")}
                                  type={showPassword ? "text" : "password"}
                                  name="password"
                                  value={userPassword}
                                  onChange={(e) => onChangeUserPassword(e.target.value)}
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
