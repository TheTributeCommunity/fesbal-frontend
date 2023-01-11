import AppBackButton from "../components/atom/AppBackButton";
import UserIDForm from "../components/molecules/UserIDForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const RegistrationUserID = () => {
    const {t} = useTranslation(namespaces.pages.registrationUserID);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">{t("title")}</h1>
                    <p>{t("description")}</p>
                </div>
            </div>
            <UserIDForm/>
        </div>
    );
}

export default RegistrationUserID;
