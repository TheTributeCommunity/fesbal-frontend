import AppNextButton from "../atom/AppNextButton";
import useRegisterEmailForm from "../../hooks/useRegisterEmailForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import AppFormInput from "../atom/AppFormInput";
import { FormEvent } from "react";

interface RegisterEmailForm {
    onSubmit: (success: boolean) => void
}

const RegisterEmailForm = ({onSubmit: parentOnSubmit}: RegisterEmailForm) => {
    const {userEmail, onSubmit, validateEmail, onEmailChange} = useRegisterEmailForm();
    const {t: translate} = useTranslation(namespaces.pages.registerEmail);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSubmit(e).then((result) => {
            parentOnSubmit(result)
        })
    }

    return (
        <form noValidate onSubmit={handleSubmit} className="mt-4 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-4">
                <AppFormInput name="email"
                              type="email"
                              label={translate("email")}
                              value={userEmail}
                              onChange={onEmailChange}
                              placeholder={translate("email")}
                />
            </div>
            <AppNextButton disabled={!validateEmail()} title={translate("next")}/>
        </form>
    );
}

export default RegisterEmailForm;
