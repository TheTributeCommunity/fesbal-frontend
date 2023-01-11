import AppEditProfileButton from "./AppEditProfileButton";
import PersonalDataItemProps from "../../types/PersonalDataItemProps";

const ProfilePersonalDataItem = ({personalData, index}: { personalData: PersonalDataItemProps, index: number }) => {
    const {title, value, hasEditButton, goTo} = personalData;
    const bgColor = index % 2 === 0 ? "" : "bg-white";
    return (
        <>
            {hasEditButton ?
                <li className={`flex flex-row justify-between items-center ${bgColor} rounded-md p-4`}>
                    <div className="flex flex-col gap-1">
                        <p className="text-primary-color font-label">{title}</p>
                        <p className="text-secondary-color font-input">{value}</p>
                    </div>
                    {goTo && <AppEditProfileButton goTo={goTo}/>}
                </li>
                :
                <li className={`${bgColor} rounded-md p-4`}>
                    <p className="text-primary-color font-label">{title}</p>
                    <p className="text-secondary-color font-input">{value}</p>
                </li>
            }
        </>
    );
};

export default ProfilePersonalDataItem;
