import PersonalDataItemProps from "../../types/PersonalDataItemProps";

const RegisterPersonalDataItem = (personalData: PersonalDataItemProps, index: number) => {
    return (
        <li key={index} className="flex gap-2 items-center">
            <p className="font-mini-title">{personalData.title}:</p>
            <p className="font-text">{personalData.value}</p>
        </li>
    );
}

export default RegisterPersonalDataItem;
