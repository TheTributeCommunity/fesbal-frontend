import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import {namespaces} from "../i18n/i18n.constants";
import AppNextButton from "../components/atom/AppNextButton";
import PlusAddIcon from "../components/icons/PlusAddIcon";
import useRegisterFamilyMembers from "../hooks/useRegisterFamilyMembers";
import AppPageHeader from "../components/molecules/AppPageHeader";
import AppWrapper from "../components/molecules/AppWrapper";
import FamilyMemberCard from "../components/atom/FamilyMemberCard";
import {AppRoute} from "../enums/app-route";

const RegisterFamilyMembers = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers);
    const {user, familyMembers, handleNextWithFamilyMembers, handleWithoutFamilyMembers, disableNext} = useRegisterFamilyMembers();

    return (
        <AppWrapper  link={AppRoute.REGISTER_EMAIL} title={translate("title")}>
            <div className="flex flex-col gap-4 w-full">
                <AppPageHeader
                            title={translate("pageHeading")} description={translate("description") as string}/>
                <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('incumbent')}</span>
                {user && <FamilyMemberCard person={user} />}
                {familyMembers.map((familyMember, index) => 
                    <div className="flex flex-col gap-4">
                        <span className="text-primary-color font-roboto-flex font-bold text-base leading-5">{translate('familyMember')} {index+1}</span>
                        <FamilyMemberCard person={familyMember} allowEdit={true} />
                    </div>)}
                <div className="flex flex-col gap-8">
                    <Link to={AppRoute.REGISTER_FAMILY_MEMBERS_ADD}
                        className="flex gap-2 bg-primary-color-light p-3.5 rounded-lg justify-center border border-white">
                        <PlusAddIcon/>
                        <p className="font-button text-primary-color">{translate("addMember")}</p>
                    </Link>
                    <p className="cursor-pointer text-center underline font-big-link"
                    onClick={handleWithoutFamilyMembers}>{translate("nextWithoutMembers")}</p>
                    <AppNextButton title={translate("nextWithMembers")} disabled={disableNext}
                                onClick={handleNextWithFamilyMembers}/>
                </div>
            </div>
        </AppWrapper>
    );
};

export default RegisterFamilyMembers;
