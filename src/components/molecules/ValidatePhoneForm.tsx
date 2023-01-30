import AppNextButton from "../atom/AppNextButton";
import useValidatePhoneForm from "../../hooks/useValidatePhoneForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import { AppDigitsValidator } from "../atom/AppDigitsInput";

const ValidatePhoneForm = () => {
    const {validationCode, CODE_LENGTH, checkValidationCodeLength, onValidationCodeChange, onSubmit} = useValidatePhoneForm();
    const {t: translate} = useTranslation(namespaces.pages.validatePhone);

    return (
        <form noValidate onSubmit={onSubmit} className="mt-4 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-col gap-4">
                <AppDigitsValidator label={translate("Código de validación")} 
                                    digitsCount={CODE_LENGTH} onChange={onValidationCodeChange} 
                                    value={validationCode} />
            </div>
            {translate('resendCode') && (
                <p className="mt-4 mb-2 text-right text-secondary-color text-sm underline cursor-pointer font-semibold">{translate('resendCode')}</p>
            )}
            <AppNextButton disabled={!checkValidationCodeLength()} title={translate("next")}/>
        </form>
    );
}

export default ValidatePhoneForm;
