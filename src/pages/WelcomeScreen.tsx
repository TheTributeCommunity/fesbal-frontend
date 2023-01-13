import {useTranslation} from "react-i18next";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import {namespaces} from "../i18n/i18n.constants";

const WelcomeScreen = () => {
    const {t} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg">
            <div className="h-1/6"></div>
            <div className="flex h-1/3 justify-center self-center md:w-1/2 lg:w-1/3 w-full">
                <LogoFesbalIcon/>
            </div>
            <div className="flex h-3/5 place-items-end self-center md:w-1/2 lg:w-1/3 w-full">
                <div className="grid w-full grid-cols-2 gap-2 lg:gap-4">
                    <AppLinkButton title={t("register")} link="/register" bgColor="bg-secondary-color"/>
                    <AppLinkButton title={t("login")} link="/login"/>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
