import {useTranslation} from "react-i18next";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <AppWrapper>
            <div className="w-full flex flex-col items-center gap-8">
                <LogoFesbalIcon/>
                <div className="grid w-full grid-cols-2 gap-4 self-center rounded-xl px-6 py-4">
                    <AppLinkButton title={translate("register")} link="/register" bgColor="bg-secondary-color"/>
                    <AppLinkButton title={translate("login")} link="/login"/>
                </div>
            </div>
        </AppWrapper>
    );
};

export default WelcomeScreen;
