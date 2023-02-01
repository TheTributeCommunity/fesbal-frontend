import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import ProfileEditEmailForm from "../components/molecules/ProfileEditEmailForm";
import PageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import { useNavigate } from "react-router";
import { useState } from "react";
import AppMessageDialog from "../components/molecules/AppMessageDialog";
import SuccessIcon from "../components/icons/SuccessIcon";
import { AppRoute } from "../enums/app-route";
import UnsuccessIcon from "../components/icons/UnsuccessIcon";

const ProfileEditEmail = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileEditEmail);
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [showFailureDialog, setShowFailureDialog] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = (success: boolean) => {
        if (success) {
            setShowSuccessDialog(true)
        } else {
            setShowFailureDialog(true);
        }
    }
    
    return (
        <AppWrapper link="/profile" title={translate('title')}>
            <div className="flex flex-col self-center w-full h-full">
                <PageHeader description={translate('description') as string}/>
                <ProfileEditEmailForm onSubmit={handleSubmit}/>
                {showSuccessDialog && (
                <AppMessageDialog
                    icon={<SuccessIcon />}
                    description={translate("successfulValidationMessage")}
                    title={translate("successfulValidationTitle")}
                    buttonText={translate("continue")}
                    buttonOnClick={() => {
                        setShowSuccessDialog(false);
                        navigate(AppRoute.PROFILE)
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
            </div>
        </AppWrapper>
    );
}

export default ProfileEditEmail;
