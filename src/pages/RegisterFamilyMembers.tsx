import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import AppNextButton from "../components/atom/AppNextButton";
import PlusAddIcon from "../components/icons/PlusAddIcon";
import useRegisterFamilyMembers from "../hooks/useRegisterFamilyMembers";
import AppPageHeader from "../components/molecules/AppPageHeader";

const RegisterFamilyMembers = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers);
    const {handleNextWithFamilyMembers, handleWithoutFamilyMembers, disableNext} = useRegisterFamilyMembers();

    return (
        <div className="app-page h-screen">
            <AppPageHeader link="/register/id" title={translate("title")}
                           description={translate("description") as string}/>
            <div className="app-page__container">
                <Link to="/register/id"
                      className="flex gap-2 bg-primary-color-light p-3.5 rounded-lg justify-center border border-white">
                    <PlusAddIcon/>
                    <p className="font-button text-primary-color">{translate("addMember")}</p>
                </Link>
            </div>
            <div className="app-page__header">
                <p className="cursor-pointer text-center underline font-big-link"
                   onClick={handleWithoutFamilyMembers}>{translate("nextWithoutMembers")}</p>
                <AppNextButton title={translate("nextWithMembers")} disabled={disableNext}
                               onClick={handleNextWithFamilyMembers}/>
            </div>
        </div>
    );
};

export default RegisterFamilyMembers;
