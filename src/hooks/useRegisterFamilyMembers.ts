import React from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";

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
        AppPopupAlert({
            icon: 'warning',
            title: t("sweetAlert.title") as string,
            text: t("sweetAlert.text") as string,
            confirmButtonText: t("sweetAlert.confirmButtonText") as string,
            cancelButtonText: t("sweetAlert.cancelButtonText") as string,
        }).fire().then((result) => {
            if (result.isConfirmed) {
                navigate("/register/referral");
            }
        })
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
