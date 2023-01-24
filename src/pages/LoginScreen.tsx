import {useTranslation} from "react-i18next";
import LoginForm from "../components/molecules/LoginForm";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const LoginScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    return (
        <AppWrapper link="/welcome">
            <div className="flex h-full w-full flex-col self-center">
                <PageHeader title={translate("title")} description={translate("description") as string}/>
                <LoginForm/>
            </div>
        </AppWrapper>
    );
};

export default LoginScreen;
