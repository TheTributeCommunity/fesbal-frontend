import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppLinkButton from "../components/atom/AppLinkButton";

const WelcomeScreen = () => {
    const {t} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="h-1/6"></div>
            <div className="flex h-1/3 justify-center self-center md:w-1/2 lg:w-1/3">
                <LogoFesbalIcon/>
            </div>
            <div className="flex h-3/5 place-items-end self-center md:w-1/2 lg:w-1/3">
                <div className="grid w-full grid-cols-2 gap-2 lg:gap-4">
                    <AppLinkButton title={t("register")} toGo="/register" bgColor="bg-secondary-color"/>
                    <AppLinkButton title={t("login")} toGo="/login"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
