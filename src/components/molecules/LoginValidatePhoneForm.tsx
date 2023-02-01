import AppNextButton from "../atom/AppNextButton";
import useLoginPhoneValidationForm from "../../hooks/useLoginValidatePhoneForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import { AppDigitsInput } from "../atom/AppDigitsInput";
import { FormEvent } from "react";

interface LoginValidatePhoneProps {
    onSubmit: (success: boolean) => void;
}

const LoginValidatePhoneForm = ({onSubmit: parentOnSubmit}: LoginValidatePhoneProps) => {
    const {validationCode, CODE_LENGTH, checkValidationCodeLength, onValidationCodeChange, onSubmit} = useLoginPhoneValidationForm();
    const {t: translate} = useTranslation(namespaces.pages.validatePhone);

    const handleResendCode = () => {
        // TODO implement resend code
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        onSubmit(e).then((result) => {
            parentOnSubmit(result)
        })
    };

    return (
        <form noValidate onSubmit={handleSubmit} className="mt-4 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-4">
                <AppDigitsInput label={translate("Código de validación")} 
                                    digitsCount={CODE_LENGTH} onChange={onValidationCodeChange} 
                                    value={validationCode} />
            </div>
            <p className="mt-4 mb-2 text-right text-secondary-color text-sm underline cursor-pointer font-semibold" onClick={handleResendCode}>{translate('resendCode')}</p>
            <AppNextButton disabled={!checkValidationCodeLength()} title={translate("next")}/>
        </form>
    );
}

export default LoginValidatePhoneForm;
