import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { namespaces } from "../i18n/i18n.constants";
import AppPopupAlert from "../components/atom/AppPopupAlert";
import {RecipientUser} from "../models/recipient-user";
import {AuthService} from "../services/auth-service";
import {RecipientUserService} from "../services/recipient-user-service";
import {Relative} from "../models/relative";

const useRegisterFamilyMembers = () => {
    const { t: translate } = useTranslation(namespaces.pages.registerFamilyMembers);
    const [familyMembers, setFamilyMembers] = useState<Relative[]>([]);
    const [user, setUser] = useState<RecipientUser>();

    useEffect(() => {
        if(AuthService.currentUser?.phone) {
            RecipientUserService.getByPhone(AuthService.currentUser.phone).then((recipientUser) => {
                setUser(recipientUser)
                recipientUser.relatives && setFamilyMembers(recipientUser.relatives)
            })
        }
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
