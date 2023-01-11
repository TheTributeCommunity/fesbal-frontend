import AppBackButton from "../components/atom/AppBackButton";
import EditPrevPasswordForm from "../components/molecules/EditPrevPasswordForm";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const EditPrevPassword = () => {
    const {t} = useTranslation(namespaces.pages.editPrevPassword);

    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/profile"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">{t("title")}</h1>
                    <p>{t("description")}</p>
                </div>
            </div>
            <EditPrevPasswordForm/>
        </div>
    );
}

export default EditPrevPassword;
