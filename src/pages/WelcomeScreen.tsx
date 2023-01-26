import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";
import PageHeader from "../components/molecules/AppPageHeader";
import AppLinkButton from "../components/atom/AppLinkButton";

const WelcomeScreen = () => {
    const {t: translate} = useTranslation(namespaces.pages.welcomeScreen);

    return (
        <AppWrapper title={translate("title")}>
            <PageHeader/>
            <div className="h-full flex flex-col justify-between h-[calc(100vh-30rem)]">
                <div className="text-secondary-color">
                    <header className="font-big-title">{translate("recipient.title")}</header>
                    <div>{translate("recipient.description")}</div>
                    <footer>
                        <AppLinkButton title={translate("recipient.login")} link="/register/name"/>
                    </footer>
                </div>
                <div className="bg-[#0F95CE] text-white">
                    <header className="font-big-title">{translate("entity.title")}</header>
                    <div>{translate("entity.description")}</div>
                    <footer>
                        <AppLinkButton bgColor={'bg-secondary-color'} title={translate("entity.login")} link="/welcome"/>
                    </footer>
                </div>
            </div>
        </AppWrapper>
    );
};

export default WelcomeScreen;
