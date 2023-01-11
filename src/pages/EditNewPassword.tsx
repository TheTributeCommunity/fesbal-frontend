import AppBackButton from "../components/atom/AppBackButton";
import EditNewPasswordForm from "../components/molecules/ProfileEditNewPasswordForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const EditNewPassword = () => {
    const {t: translate} = useTranslation(namespaces.pages.profileEditNewPassword);
    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/profile/edit-prev-password"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">{translate("title")}</h1>
                    <p>{translate("description")}</p>
                </div>
            </div>
            <EditNewPasswordForm/>
        </div>
    );
}

export default EditNewPassword;
