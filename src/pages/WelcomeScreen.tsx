import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LogoFesbalWhiteIcon from "../components/icons/LogoFesbalWhiteIcon";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <a href="/welcome">
            <div className="bg-[#0F95CE] h-screen flex flex-col justify-end">
                <div className="app-logo-center">
                    <LogoFesbalWhiteIcon/>
                </div>
                <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pb-10 text-center">
                    <span className="font-roboto-flex font-bold text-base leading-6 text-white">#NingúnHogarSinAlimentos</span>
                </div>
            </div>
        </a>
    );
};

export default WelcomeScreen;
