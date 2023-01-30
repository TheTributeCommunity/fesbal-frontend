import LoginValidatePhoneForm from "../components/molecules/LoginValidatePhoneForm";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import { useState } from "react";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import AppMessageDialog from "../components/molecules/AppMessageDialog";
import { useNavigate } from "react-router-dom";
import UnsuccessIcon from "../components/icons/UnsuccessIcon";
import {AppRoute} from "../enums/app-route";

const LoginValidatePhone = () => {
    const { t: translate } = useTranslation(namespaces.pages.loginValidatePhone);
    const [showFailureDialog, setShowFailureDialog] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (success: boolean) => {
        // TODO it's just an example for calling the dialogs for now
        if (success) {
            // TODO login successfully
        } else {
            setShowFailureDialog(true);
        }
    };

    return (
        <AppWrapper link={"/login"}>
            <AppPageHeader
                title={translate("title")}
                description={translate("description") as string}
            />
            <LoginValidatePhoneForm onSubmit={handleSubmit} />
            {showFailureDialog && (
                <AppMessageDialog
                    icon={<UnsuccessIcon />}
                    description={translate("unsuccessfulValidationMessage")}
                    title={translate("unsuccessfulValidationTitle")}
                    buttonText={translate("tryAgainButton")}
                    buttonBgColor="bg-warning-color"
                    buttonOnClick={() => setShowFailureDialog(false)}
                />
            )}
        </AppWrapper>
    );
};

export default LoginValidatePhone;
