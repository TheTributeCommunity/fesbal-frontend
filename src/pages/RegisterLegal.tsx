import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import {namespaces} from "../i18n/i18n.constants";

const RegisterLegal = () => {
    const {t} = useTranslation(namespaces.pages.registerLegal);

    return (
        <div className="flex h-screen flex-col justify-between p-8 page-bg text-secondary-color">
            <div className="h-1/6 w-full self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/welcome"/>
            </div>
            <div className="flex h-1/3 justify-center self-center md:w-1/2 lg:w-1/3">
                <LogoFesbalIcon/>
            </div>
            <div
                className="flex h-3/5 flex-col justify-between self-center whitespace-pre-line rounded-lg bg-white p-4 md:w-1/2 md:p-8 lg:w-1/3">
                <div>
                    <h1 className="mb-4 font-big-title">{t("title")}</h1>
                    <p className="font-text">{t("description")}</p>
                </div>
                <div>
                    <p className="font-label">{t("subtitle")}</p>
                    <a href="https://www.theagilemonkeys.com/" target="_blank">
                        <p className="underline text-primary-color font-small-link">{t("terms")}</p>
                    </a>
                </div>
                <AppLinkButton title={t("next")} toGo="/register/id"/>
            </div>
        </div>
    );
};

export default RegisterLegal;
