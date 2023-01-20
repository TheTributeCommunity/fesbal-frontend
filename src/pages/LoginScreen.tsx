import {useTranslation} from "react-i18next";
import LoginForm from "../components/molecules/LoginForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";

const LoginScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    return (
        <div className="app-page h-screen">
            <PageHeader link="/welcome" title={translate("title")} description={translate("description") as string}/>
            <LoginForm/>
        </div>
    );
};

export default LoginScreen;
