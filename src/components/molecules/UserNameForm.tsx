import AppNextButton from "../atom/AppNextButton";
import useUserNameForm from "../../hooks/useUserNameForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";

const UserNameForm = () => {
    const {userName, userSurname, onSubmit, validateNameSurname, onNameChange, onSurnameChange} = useUserNameForm();
    const {t: translation} = useTranslation(namespaces.pages.registrationName);

    const isValidText = (text: string) => {
        const unwantedText = text.match(/[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ~^´` ]+/ig) || [];
        return unwantedText.length == 0;
    }

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col gap-4 h-full mt-6 self-center w-full md:w-1/2 lg:w-1/3 justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <label htmlFor="identityNumber" className={userName ? "opacity-100" : "opacity-0"}>{translation("name")}</label>
                    <input type="text" placeholder={translation("name") as string}
                            className="text-secondary-color placeholder-primary-color rounded-md px-4 py-5 w-full"
                            value={userName} 
                            onChange={(e) => {
                                if(!isValidText(e.target.value)) {
                                    return false;
                                }; 
                                onNameChange(e.target.value); 
                            }}/>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <label htmlFor="identityNumber" className={userSurname ? "opacity-100" : "opacity-0"}>{translation("surname")}</label>
                    <input type="text" placeholder={translation("surname") as string}
                            className="text-secondary-color placeholder-primary-color rounded-md px-4 py-5 w-full"
                            value={userSurname}
                            onChange={(e) => {
                                if(!isValidText(e.target.value)) {
                                    return false;
                                }; 
                                onSurnameChange(e.target.value); 
                            }}/>
                </div>
            </div>
            <AppNextButton disabled={!validateNameSurname()} title={translation("next")}/>
        </form>
    );
}

export default UserNameForm;
