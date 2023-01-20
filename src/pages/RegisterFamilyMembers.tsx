import React from "react";
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import AppBackButton from "../components/atom/AppBackButton";
import AppNextButton from "../components/atom/AppNextButton";
import PlusAddIcon from "../components/icons/PlusAddIcon";
import useRegisterFamilyMembers from "../hooks/useRegisterFamilyMembers";

const RegisterFamilyMembers = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers);
    const {handleNextWithFamilyMembers, handleWithoutFamilyMembers, disableNext} = useRegisterFamilyMembers();

    return (
        <div className="app-page h-screen">
            <div className="flex w-full flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton link="/register/id"/>
                <div>
                    <h1 className="mb-4 text-1xl font-big-title">{translate("title")}</h1>
                    <p className="font-text">{translate("description")}</p>
                </div>
                <Link to="/register/id"
                      className="flex gap-2 bg-primary-color-light p-3.5 rounded-lg justify-center border border-white">
                    <PlusAddIcon/>
                    <p className="font-button text-primary-color">{translate("addMember")}</p>
                </Link>
            </div>
            <div className="flex w-full flex-col gap-4 self-center md:w-1/2 lg:w-1/3">
                <p className="cursor-pointer text-center underline font-big-link"
                   onClick={handleWithoutFamilyMembers}>{translate("nextWithoutMembers")}</p>
                <AppNextButton title={translate("nextWithMembers")} disabled={disableNext}
                               onClick={handleNextWithFamilyMembers}/>
            </div>
        </div>
    );
};

export default RegisterFamilyMembers;
