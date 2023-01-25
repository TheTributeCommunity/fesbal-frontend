import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import {namespaces} from "../../i18n/i18n.constants";
import useRegisterPhoneForm from "../../hooks/useRegisterPhoneForm";

const RegisterPhoneForm = () => {
    const { userPhone, onSubmit, validateUserPhone, onUserPhoneChange} = useRegisterPhoneForm();
    const {t: translate} = useTranslation(namespaces.pages.registerPhone);

    return (
        <form noValidate onSubmit={onSubmit} className="mt-6 flex w-full flex-col justify-between gap-4 self-center">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-primary-color w-full">
                    <label htmlFor="phone" className={`app-label ${userPhone ? '' : "app-label--hidden"}`}>{translate("phone")}</label>
                    <input type="number" placeholder={translate("phone") as string}
                           className="app-input"
                           value={userPhone} onChange={(e) => onUserPhoneChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserPhone()} title={translate("next")}/>
        </form>
    );
}

export default RegisterPhoneForm;
