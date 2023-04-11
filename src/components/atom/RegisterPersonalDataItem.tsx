import PersonalDataItemProps from '../../types/PersonalDataItemProps'

const RegisterPersonalDataItem = (personalData: PersonalDataItemProps, index: number) => {
    return (
        <li key={index} className={`col-span-${personalData.span} py-1`}>
            <p className="font-label text-primary-color">{personalData.title}</p>
            <p className={`font-text text-ellipsis overflow-hidden ${personalData.className}`}>{personalData.value}</p>
        </li>
    )
}

export default RegisterPersonalDataItem
