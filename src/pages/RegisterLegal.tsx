import {useTranslation} from "react-i18next";
import AppLinkButton from "../components/atom/AppLinkButton";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppWrapper from "../components/molecules/AppWrapper";
import {namespaces} from "../i18n/i18n.constants";

const RegisterLegal = () => {
    const {t} = useTranslation(namespaces.pages.registerLegal);

    return (
        <>
        <AppWrapper link="/welcome">
            <div className="flex w-full flex-col self-center items-center mt-4 gap-4">
                <LogoFesbalIcon />
            </div>
        </AppWrapper>
            <div className="fixed bottom-0 w-full left-0 right-0 flex flex-row justify-center">
                <div className="w-full flex flex-col justify-between gap-8 self-center whitespace-pre-line rounded-lg bg-white px-4  py-6 mx-4 md:w-1/2 lg:w-1/3 drop-shadow-md">
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
                    <AppLinkButton title={t("next")} link="/register/id"/>
                </div>
            </div>
        </>
    );
};

export default RegisterLegal;
