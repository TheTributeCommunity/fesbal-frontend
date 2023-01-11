import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppLinkButton from "../components/atom/AppLinkButton";

const WelcomeScreen = () => {
    const {t} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div className="h-screen flex flex-col page-bg p-8 justify-between">
            <div className="flex self-center md:w-1/2 lg:w-1/3 justify-center h-1/2 place-items-end">
                <LogoFesbalIcon/>
            </div>
            <div className="md:w-1/2 lg:w-1/3 self-center grid grid-cols-2 gap-2 lg:gap-4">
                <AppLinkButton title={t("register")} toGo="/register" bgColor="bg-secondary-color"/>
                <AppLinkButton title={t("login")} toGo="/login"/>
            </div>
        </div>
    );
};

export default WelcomeScreen;
