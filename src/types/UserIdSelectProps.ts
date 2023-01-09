interface UserIDSelectProps {
    options?: UserIDSelectOption[];
    value: UserIDSelectOption;
    onChange: (option: UserIDSelectOption) => void;
}

export type UserIDSelectOption = "DNI" | "NIE" | undefined;

export default UserIDSelectProps;
