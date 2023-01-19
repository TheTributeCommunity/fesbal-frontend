import {useTranslation} from "react-i18next";
import AppNextButton from "../atom/AppNextButton";
import UserIDSelect from "../atom/RegisterIDSelect";
import useRegisterIDForm from "../../hooks/useRegisterIDForm";
import {namespaces} from "../../i18n/i18n.constants";

const RegisterIDForm = () => {
    const {selectedOption, userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange} = useRegisterIDForm();
    const {t: translate} = useTranslation(namespaces.pages.registerID);

    const selectOptions: string[] = ['DNI', 'NIE'];

    return (
        <form noValidate onSubmit={onSubmit} className="app-form">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-primary-color">
                    <label htmlFor="identityType"
                           className={`app-label ${selectedOption ? '' : "app-label--hidden"}`}>{translate("type")}</label>
                    <UserIDSelect options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                </div>
                <div className="flex flex-col gap-1.5 text-primary-color w-full">
                    <label htmlFor="identityNumber" className={`app-label ${userID ? '' : "app-label--hidden"}`}>{translate("id")}</label>
                    <input type="text" placeholder={translate("id") as string}
                           className="app-input"
                           value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserID()} title={translate("next")}/>
        </form>
    );
}

export default RegisterIDForm;
