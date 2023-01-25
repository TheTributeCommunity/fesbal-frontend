import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import RegisterIDForm from "../components/molecules/RegisterIDForm";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const RegisterID = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerID);

    return (
        <AppWrapper  link="/login" title={translate("title")}>
            <PageHeader description={translate("description") as string}/>
            <RegisterIDForm/>
        </AppWrapper>
    );
}

export default RegisterID;
