import AppWrapper from "../components/molecules/AppWrapper";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import RegisterNewFamilyMemberForm from "../components/molecules/RegisterNewFamilyMemberForm";

export default () => {
  const {t: translate} = useTranslation(namespaces.pages.registerID);
  return (
    // <AppWrapper title={translate("title")} link="/register/family-members">
    <AppWrapper title={"Añadir familiar"} link="/register/family-members">
      <RegisterNewFamilyMemberForm />
    </AppWrapper>
  );
}

