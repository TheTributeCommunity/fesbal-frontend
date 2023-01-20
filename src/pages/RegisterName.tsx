import RegisterNameForm from "../components/molecules/RegisterNameForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPageHeader from "../components/molecules/AppPageHeader";

const RegistrationUserName = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerName);

    return (
        <div className="app-page h-screen">
            <AppPageHeader link="/register" title={translate("title")}
                           description={translate("description") as string}/>
            <RegisterNameForm/>
        </div>
    );
}

export default RegistrationUserName;
