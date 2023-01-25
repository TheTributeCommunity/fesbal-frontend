import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import RegisterEmailForm from "../components/molecules/RegisterEmailForm";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";

const RegisterEmail = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerEmail);

    return (
        // TODO change back link to the Phone Number Registration page
        <AppWrapper link="/register" title={translate("headerTitle")}>
            <PageHeader title={translate("title")} description={translate("description") as string} />
            <RegisterEmailForm />
        </AppWrapper>
    );
};

export default RegisterEmail;
