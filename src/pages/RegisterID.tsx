import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import RegisterIDForm from "../components/molecules/RegisterIDForm";
import PageHeader from "../components/molecules/AppPageHeader";

const RegisterID = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerID);

    return (
        <div className="app-page h-screen">
            <PageHeader link="/login" title={translate("title")} description={translate("description") as string}/>
            <RegisterIDForm/>
        </div>
    );
}

export default RegisterID;
