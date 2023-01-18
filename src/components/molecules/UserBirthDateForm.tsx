import AppNextButton from "../atom/AppNextButton";
import useUserBirthDateForm from "../../hooks/useUserBirthDateForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import {Calendar} from "primereact/calendar";

const UserBirthDateForm = () => {
    const {userBirthDate, onBirthDateChange, onSubmit, validateBirthDate} = useUserBirthDateForm();
    const {t: translation} = useTranslation(namespaces.pages.registrationBirthDate);
     
    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col gap-4 h-full mt-6 self-center w-full md:w-1/2 lg:w-1/3 justify-between">
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <label htmlFor="identityNumber" className={userBirthDate ? "opacity-100" : "opacity-0"}>{translation("birthdate")}</label>
                    <input type="text" placeholder={translation("birthdate") as string}
                            className="text-secondary-color placeholder-primary-color rounded-md px-4 py-5 w-full"
                            value={userBirthDate} 
                            onChange={(e) => {
                                onBirthDateChange(e.target.value); 
                            }}/>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-primary-color w-full">
                    <Calendar inline value={userBirthDate} onChange={(e) => onBirthDateChange(e.value?.toString() || "" )}></Calendar>
                </div>
            </div>
 
            <AppNextButton disabled={!validateBirthDate()} title={translation("next")}/>
        </form>
    );
}

export default UserBirthDateForm;