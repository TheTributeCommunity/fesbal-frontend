import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";

const useMenuDeleteAccount = () => {
    const {t: translate} = useTranslation(namespaces.pages.menuDeleteAccount);
    const navigate = useNavigate();

    const handleDeleteAccount = () => {
        AppPopupAlert({
            icon: 'warning',
            title: translate("title") as string,
            text: translate("description") as string,
            confirmButtonText: translate("deleteAccount") as string,
            cancelButtonText: translate("cancel") as string,
        }).fire().then((result) => {
            if (result.isConfirmed) {
                AppPopupAlert({
                    icon: 'success',
                    title: translate("deleteAccountSuccess") as string,
                    text: translate("deleteAccountSuccessDescription") as string,
                    confirmButtonText: translate("deleteAccountSuccessButton") as string,
                }).fire().then(() => navigate('/login'));
            }
        });
    };
    return {handleDeleteAccount};
};

export default useMenuDeleteAccount;
