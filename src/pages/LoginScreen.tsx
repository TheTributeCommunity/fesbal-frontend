import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import LoginForm from "../components/molecules/LoginForm";
import {namespaces} from "../i18n/i18n.constants";

const LoginScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginScreen);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/welcome"/>
                <div>
                    <h1 className="mb-4 text-1xl font-big-title">{translate("title")}</h1>
                    <p className="font-text">{translate("description")}</p>
                </div>
            </div>
            <LoginForm/>
        </div>
    );
};

export default LoginScreen;
