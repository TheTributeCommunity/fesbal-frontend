import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import UserIDSelect from "../atom/RegisterIDSelect";
import useRegisterIDForm from "../../hooks/useRegisterIDForm";
import {namespaces} from "../../i18n/i18n.constants";

const RegisterIDForm = () => {
    const {selectedOption, userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange} = useRegisterIDForm();
    const {t} = useTranslation(namespaces.pages.registerID);

    const selectOptions: string[] = ['DNI', 'NIE'];

    return (
        <form noValidate onSubmit={onSubmit}
              className="mt-8 flex h-full flex-col justify-between gap-4 self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    <label htmlFor="identityType"
                           className={selectedOption ? "opacity-100 font-label" : "opacity-0"}>{t("type")}</label>
                    <UserIDSelect options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                </div>
                <div className="flex flex-col gap-1.5 text-primary-color w-full">
                    <label htmlFor="identityNumber" className={userID ? "opacity-100 font-label" : "opacity-0"}>{t("id")}</label>
                    <input type="text" placeholder={t("id") as string}
                           className="w-full rounded-md px-4 py-5 text-secondary-color font-input placeholder-primary-color"
                           value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserID()} title={t("next")}/>
        </form>
    );
}

export default RegisterIDForm;
