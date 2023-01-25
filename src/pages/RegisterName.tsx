import RegisterNameForm from "../components/molecules/RegisterNameForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const RegistrationUserName = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerName);

    return (
       <AppWrapper link="/register" title={translate("title")}>
            <AppPageHeader description={translate("description") as string}/>
            <RegisterNameForm/>
        </AppWrapper>
    );
}

export default RegistrationUserName;
