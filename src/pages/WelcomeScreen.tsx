import {useTranslation} from "react-i18next";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppWrapper from "../components/molecules/AppWrapper";
import {namespaces} from "../i18n/i18n.constants";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <AppWrapper>
            <div className="flex flex-col items-center gap-8">
                <LogoFesbalIcon/>
                <div className="grid w-full grid-cols-2 gap-4 self-center rounded-xl px-10 py-4 md:w-1/2 lg:w-1/3">
                    <AppLinkButton title={translate("register")} link="/register" bgColor="bg-secondary-color"/>
                    <AppLinkButton title={translate("login")} link="/login"/>
                </div>
            </div>
        </AppWrapper>
    );
};

export default WelcomeScreen;
