import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import PageHeader from "../components/molecules/AppPageHeader";
import AppLinkButton from "../components/atom/AppLinkButton";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <div>
            <div className="flex flex-row fixed w-full md:w-1/2 lg:w-1/3 px-8 pt-4 pb-4 top-0 left-0 right-0 mx-auto">
                <span
                    className="font-roboto-flex font-bold text-base leading-6 text-dark-blue">BALPA</span>
            </div>
            <PageHeader/>
            <div className="h-full flex flex-col justify-between h-[calc(100vh)] pt-16">
                <div className="text-secondary-color h-1/2">
                    <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pt-8">
                        <header className="font-big-title mb-4">{translate("recipient.title")}</header>
                        <div>{translate("recipient.description")}</div>
                        <footer className="pt-8">
                            <AppLinkButton title={translate("recipient.login")} link="/register/name"/>
                        </footer>
                    </div>
                </div>
                <div className="bg-[#0F95CE] text-white h-1/2">
                    <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pt-16">
                        <header className="font-big-title mb-4">{translate("entity.title")}</header>
                        <div>{translate("entity.description")}</div>
                        <footer className="pt-8">
                            <AppLinkButton bgColor={'bg-secondary-color'} title={translate("entity.login")} link="/welcome"/>
                        </footer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeScreen;
