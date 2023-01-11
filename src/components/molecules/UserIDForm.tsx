import UserIDSelect from "../atom/RegisterIDSelect";
import AppNextButton from "../atom/AppNextButton";
import useUserIDForm from "../../hooks/useRegisterIDForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

const UserIDForm = () => {
    const {selectedOption, userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange} = useUserIDForm();
    const {t} = useTranslation(namespaces.pages.registrationUserID);

    const selectOptions: string[] = ['DNI', 'NIE'];

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col gap-4 h-full mt-6 self-center md:w-1/2 lg:w-1/3 justify-between">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-primary-color">
                    <label htmlFor="identityType"
                           className={selectedOption ? "opacity-100" : "opacity-0"}>{t("type")}</label>
                    <UserIDSelect options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <label htmlFor="identityNumber" className={userID ? "opacity-100" : "opacity-0"}>{t("id")}</label>
                    <input type="text" placeholder={t("id") as string}
                           className="text-secondary-color placeholder-primary-color rounded-md px-4 py-5 w-full"
                           value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserID()} title={t("next")}/>
        </form>
    );
}

export default UserIDForm;
