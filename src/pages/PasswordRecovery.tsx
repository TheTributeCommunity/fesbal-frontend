import AppBackButton from "../components/atom/AppBackButton";
import PasswordRecoveryForm from "../components/molecules/PasswordRecoveryForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

export const PasswordRecovery = () => {
    const {t: translate} = useTranslation(namespaces.pages.passwordRecovery);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">{translate("title")}</h1>
                    <p>{translate("description")}</p>
                </div>
            </div>
            <PasswordRecoveryForm/>
        </div>
    );
};

export default PasswordRecovery;
