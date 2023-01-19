import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";

const useMenuDeleteAccount = () => {
    const {t} = useTranslation(namespaces.pages.menuDeleteAccount);
    const navigate = useNavigate();

    const handleDeleteAccount = () => {
        AppPopupAlert({
            icon: 'warning',
            title: t("title") as string,
            text: t("description") as string,
            confirmButtonText: t("deleteAccount") as string,
            cancelButtonText: t("cancel") as string,
        }).fire().then((result) => {
            if (result.isConfirmed) {
                AppPopupAlert({
                    icon: 'success',
                    title: t("deleteAccountSuccess") as string,
                    text: t("deleteAccountSuccessDescription") as string,
                    confirmButtonText: t("deleteAccountSuccessButton") as string,
                }).fire().then(() => navigate('/login'));
            }
        });
    };
    return {handleDeleteAccount};
};

export default useMenuDeleteAccount;
