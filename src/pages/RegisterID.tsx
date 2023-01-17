import {useTranslation} from "react-i18next";
import AppBackButton from "../components/atom/AppBackButton";
import RegisterIDForm from "../components/molecules/RegisterIDForm";
import {namespaces} from "../i18n/i18n.constants";

const RegisterID = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerID);

    return (
        <div className="app-page">
            <div className="app-page__header">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="mb-4 font-big-title">{translate("title")}</h1>
                    <p className="font-text">{translate("description")}</p>
                </div>
            </div>
            <RegisterIDForm/>
        </div>
    );
}

export default RegisterID;
