import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import Splash from "../components/molecules/Splash";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div className="bg-page">
            <div className="flex flex-row w-full fixed md:w-1/2 lg:w-1/3 px-8 pt-4 pb-4 top-0 left-0 right-0 mx-auto justify-center">
                <span
                    className="font-roboto-flex font-bold text-base leading-6 text-dark-blue">BALPA</span>
            </div>
            <PageHeader/>
            <Splash/>
        </div>
    );
};

export default WelcomeScreen;
