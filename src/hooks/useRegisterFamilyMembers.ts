import React from "react";
import {useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";

const useRegisterFamilyMembers = () => {
    const {t} = useTranslation(namespaces.pages.registerFamilyMembers);
    const [familyMembers, setFamilyMembers] = React.useState([]);

    const navigate = useNavigate();

    const disableNext = familyMembers.length === 0;
    const handleNextWithFamilyMembers = () => {
        if (!disableNext) {
            navigate("/register/referral");
        }
    };

    const handleWithoutFamilyMembers = () => {
        Swal.fire({
            title: t("sweetAlert.title") as string,
            text: t("sweetAlert.text") as string,
            icon: "warning",
            iconColor: "#EB5757",
            showCancelButton: true,
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            reverseButtons: true,
            confirmButtonText: t("sweetAlert.confirmButtonText") as string,
            cancelButtonText: t("sweetAlert.cancelButtonText") as string,
            customClass: {
                popup: "rounded-2xl",
                actions: "flex gap-2 w-full",
                title: "font-big-title text-secondary-color",
                htmlContainer: "text-left font-text text-secondary-color",
                confirmButton: "bg-primary-color hover-primary-color text-white rounded-2xl font-button w-2/5" +
                    " focus:outline-none focus:ring-1 focus:ring-offset-1 focus-primary-color h-16",
                cancelButton: "bg-warning-color hover-warning-color text-white rounded-2xl font-button w-2/5" +
                    " focus:outline-none focus:ring-1 focus:ring-offset-1 focus-warning-color h-16",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
        }).then((result) => {
            if (result.isConfirmed) {
                navigate("/register/referral");
            }
        });
    };


    return {
        familyMembers,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        handleWithoutFamilyMembers,
        disableNext
    };
}

export default useRegisterFamilyMembers;
