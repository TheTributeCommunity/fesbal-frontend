import AppBackButton from "../components/atom/AppBackButton";
import UserBirthDateForm from "../components/molecules/UserBirthDateForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const RegistrationBirthDate = () => {
    const {t: translation} = useTranslation(namespaces.pages.registrationBirthDate);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="text-2xl font-bold mb-4">{translation("title")}</h1>
                    <p>{translation("description")}</p>
                </div>
            </div>
            <UserBirthDateForm/>
        </div>
    );
}

export default RegistrationBirthDate;