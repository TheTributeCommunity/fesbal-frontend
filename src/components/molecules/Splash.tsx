import LogoFesbalWhiteIcon from "../icons/LogoFesbalWhiteIcon";
import {useTranslation} from "react-i18next";
import {namespaces} from "../../i18n/i18n.constants";
import SplashCard from "../atom/SplashCard";

const Splash = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);
    const FIGMA_PROTOTYPE_ENTITIES_LOGIN_URL = "https://www.figma.com/proto/fieW8OoWlFLyL90UleIeQ1/Draft-0.6---FESBAL?page-id=1147%3A14538&node-id=1147%3A15887&viewport=4483%2C1878%2C0.53&scaling=min-zoom&starting-point-node-id=1147%3A15887"

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
                loginLink={FIGMA_PROTOTYPE_ENTITIES_LOGIN_URL}
                backgroundColor={"bg-[#0F95CE]"}
                textColor={"text-white"}
                buttonBackGroundColor={"bg-secondary-color"}
            />
        </div>
        )
}

export default Splash;