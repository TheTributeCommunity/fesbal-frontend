import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";
import FamilyMember from "../types/FamilyMember";
import UserProps from "../types/UserProps";
import users from "../mocks/users.mock";

const useRegisterFamilyMembers = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerFamilyMembers);
    const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([]);
    const [user, setUser] = useState<UserProps>();

    useEffect(() => {
        setUser(users[0])
        users[0].familyMembers && setFamilyMembers(users[0].familyMembers)
    }, [])

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
            title: translate("sweetAlert.title") as string,
            text: translate("sweetAlert.text") as string,
            confirmButtonText: translate("sweetAlert.confirmButtonText") as string,
            cancelButtonText: translate("sweetAlert.cancelButtonText") as string,
        }).fire().then((result) => {
            if (result.isConfirmed) {
                navigate("/register/referral");
            }
        })
    };


    return {
        user,
        familyMembers,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        handleWithoutFamilyMembers,
        disableNext
    };
}

export default useRegisterFamilyMembers;
