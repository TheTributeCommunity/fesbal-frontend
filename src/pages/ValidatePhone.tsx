import ValidatePhoneForm from "../components/molecules/ValidatePhoneForm";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import { useState } from "react";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import AppMessageDialog from "../components/molecules/AppMessageDialog";
import SuccessIcon from "../components/icons/SuccessIcon";
import { useNavigate } from "react-router-dom";
import UnsuccessIcon from "../components/icons/UnsuccessIcon";
import {AppRoute} from "../enums/app-route";

const ValidatePhone = () => {
    const { t: translate } = useTranslation(namespaces.pages.validatePhone);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showFailureDialog, setShowFailureDialog] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (success: boolean) => {
        if (success) {
            setShowSuccessDialog(true);
        } else {
            setShowFailureDialog(true);
        }
    };

    return (
        <AppWrapper showBackButton title={translate("headerTitle")}>
            <AppPageHeader
                title={translate("title")}
                description={translate("description") as string}
            />
            <ValidatePhoneForm onSubmit={handleSubmit} />
            {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate("successfulValidationMessage")}
                    title={translate("successfulValidationTitle")}
                    buttonText={translate("next")}
                    buttonOnClick={() => {
                        setShowSuccessDialog(false);
                        navigate(AppRoute.REGISTER_EMAIL)
                    }}
                />
            )}
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

export default ValidatePhone;
