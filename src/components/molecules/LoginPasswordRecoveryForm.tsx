import {Link} from "react-router-dom";
import AppNextButton from "../atom/AppNextButton";
import useLoginPasswordRecovery from "../../hooks/useLoginPasswordRecovery";
import {namespaces} from "../../i18n/i18n.constants";
import {useTranslation} from "react-i18next";
import AppFormInput from "../atom/AppFormInput";

const LoginPasswordRecoveryForm = () => {
    const {email, onChange, hasError, onSubmit} = useLoginPasswordRecovery("");

    const {t: translate} = useTranslation(namespaces.pages.loginPasswordRecovery);
    const buttonDisabled = email.length < 6 || hasError;

    return (
        <form noValidate onSubmit={onSubmit} className="mt-8 flex h-full w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col ">
                <AppFormInput label={translate("email")}
                              name="email" value={email}
                              onChange={onChange}
                              placeholder={translate("email")}
                              hasError={hasError}
                              error={translate("error") as string}
                />
                <Link to="/login/password-recovery" className="self-end underline font-small-link mt-2">
                    {translate("forgot")}
                </Link>
            </div>
            <AppNextButton disabled={buttonDisabled} title={translate("next")}/>
        </form>
    );
}

export default LoginPasswordRecoveryForm;
