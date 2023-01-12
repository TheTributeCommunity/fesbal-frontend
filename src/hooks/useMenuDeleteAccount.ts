import {useTranslation} from "react-i18next";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {namespaces} from "../i18n/i18n.constants";

const useMenuDeleteAccount = () => {
    const {t} = useTranslation(namespaces.pages.menuDeleteAccount);
    const navigate = useNavigate();

    const handleDeleteAccount = () => {
        Swal.fire({
            showCancelButton: true,
            title: t("title") as string,
            text: t("description") as string,
            confirmButtonText: t("deleteAccount") as string,
            cancelButtonText: t("cancel") as string,
            icon: 'warning',
            iconColor: '#EB5757',
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            reverseButtons: true,
            focusCancel: true,
            customClass: {
                popup: "rounded-md",
                actions: "flex gap-2 w-full",
                title: "font-big-title",
                confirmButton: "bg-warning-color hover-warning-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-warning-color h-20",
                cancelButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: t("deleteAccountSuccess") as string,
                    text: t("deleteAccountSuccessDescription") as string,
                    confirmButtonText: t("deleteAccountSuccessButton") as string,
                    icon: 'success',
                    iconColor: '#3085d6',
                    buttonsStyling: false,
                    position: 'bottom',
                    padding: '1rem',
                    customClass: {
                        popup: "rounded-md",
                        actions: "w-full",
                        title: "text-big-title",
                        confirmButton: "bg-primary-color hover-primary-color text-white rounded-xl font-button w-full" +
                            " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-20",
                    },
                    width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
                }).then(() => navigate('/login'));
            }
        });
    };
    return {handleDeleteAccount};
};

export default useMenuDeleteAccount;
