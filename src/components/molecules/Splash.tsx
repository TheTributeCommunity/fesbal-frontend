import LogoFesbalWhiteIcon from "../icons/LogoFesbalWhiteIcon";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import SplashCard from "../atom/SplashCard";

const Splash = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div className="h-full flex flex-col justify-between h-[calc(100vh-2rem)] mt-8">
            <div className="app-logo-center splash">
                <LogoFesbalWhiteIcon/>
            </div>
            <SplashCard
                title={translate("recipient.title")}
                description={translate("recipient.description")}
                loginText={translate("recipient.login")}
                loginLink={"/login"}
                backgroundColor={""}
                textColor={"text-secondary-color"}
                buttonBackGroundColor={"bg-primary-color"}
                hasRegisterLink={true}
            />
             <SplashCard
                title={translate("entity.title")}
                description={translate("entity.description")}
                loginText={translate("entity.login")}
                loginLink={"/"}
                backgroundColor={"bg-[#0F95CE]"}
                textColor={"text-white"}
                buttonBackGroundColor={"bg-secondary-color"}
            />
        </div>
        )
}

export default Splash;