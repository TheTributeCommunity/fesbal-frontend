import {namespaces} from "../i18n/i18n.constants";
import LoginPasswordRecoveryForm from "../components/molecules/LoginPasswordRecoveryForm";
import AppPageHeader from "../components/molecules/AppPageHeader";
import {useTranslation} from "react-i18next";
import AppWrapper from "../components/molecules/AppWrapper";

const LoginPasswordRecovery = () => {
    const {t: translate} = useTranslation(namespaces.pages.loginPasswordRecovery);

    return (
        <AppWrapper showBackButton>
            <div className="flex w-full flex-col self-center justify-start">
                <AppPageHeader title={translate("title")} description={translate("description") as string}/>
                <LoginPasswordRecoveryForm/>
            </div>
        </AppWrapper>
    );
};

export default LoginPasswordRecovery;
