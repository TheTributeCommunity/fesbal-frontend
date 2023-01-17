import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import LoginForm from "../components/molecules/LoginForm";
import {namespaces} from "../i18n/i18n.constants";

const LoginScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton goTo="/welcome"/>
                <div>
                    <h1 className="mb-4 font-big-title">{translate("title")}</h1>
                    <p className="font-text">{translate("description")}</p>
                </div>
            </div>
            <LoginForm/>
        </div>
    );
};

export default LoginScreen;
