import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { namespaces } from "../../i18n/i18n.constants";
import FamilyMember from "../../types/FamilyMember";
import UserProps from "../../types/UserProps";
import DeleteIcon from "../icons/DeleteIcon";
import EditIcon from "../icons/EditIcon";

interface FamilyMemberCardProps {
    person: UserProps | FamilyMember
    allowEdit?: boolean
}

const isUser = (p: UserProps | FamilyMember): p is UserProps => (p as UserProps).phone !== undefined

const FamilyMemberCard = ({person, allowEdit = false}: FamilyMemberCardProps): JSX.Element => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers);
    
    return (
        <div className="w-full flex flex-col gap-4 bg-white shadow-md rounded-xl p-4 self-center">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col">
                    <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden">{translate('personCard.fullName')}</span>
                    <span className="text-secondary-color font-bold text-lg text-ellipsis overflow-hidden">{person.fullName}</span>
                </div>
                {!isUser(person) && allowEdit &&
                <div className="flex flex-row align-center items-center gap-4">
                    <Link to={""}><EditIcon /></Link>
                    <Link to={""}><DeleteIcon /></Link>
                </div>}
            </div>
            <div className="w-full border border-[#F2FBFF] border-solid"></div>
            <div className="w-full flex flex-row justify-between">
                <div className="w-1/2 flex flex-col pr-1">
                    <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden whitespace-nowrap">{translate('personCard.id')}</span>
                    <span className="text-secondary-color font-normal text-base text-ellipsis overflow-hidden">{person.id}</span>
                </div>
                <div className="w-1/2 flex flex-col pl-1">
                    <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden">{translate('personCard.birthDate')}</span>
                    <span className="text-secondary-color font-normal text-base text-ellipsis overflow-hidden">{person.birthDate}</span>
                </div>
            </div>
            {isUser(person) &&
                <div className="w-full flex flex-row justify-between">
                    <div className="w-1/2 flex flex-col pr-1">
                        <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden">{translate('personCard.phone')}</span>
                        <span className="text-secondary-color font-normal text-base text-ellipsis overflow-hidden">{person.phone}</span>
                    </div>
                    <div className="w-1/2 flex flex-col pl-1">
                        <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden">{translate('personCard.email')}</span>
                        <span className="text-secondary-color font-normal text-base text-ellipsis overflow-hidden">{person.email}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default FamilyMemberCard;