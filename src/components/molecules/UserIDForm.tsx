import UserIDSelect from "../atom/UserIDSelect";
import AppNextButton from "../atom/AppNextButton";
import useUserIDForm from "../../hooks/useUserIDForm";
import {UserIDSelectOption} from "../../types/UserIdSelectProps";

const selectOptions: UserIDSelectOption[] = ['DNI', 'NIE'];
const UserIDForm = () => {
    const {selectedOption, userID, onSubmit, validateUserID, onUserIDChange, onSelectedOptionChange} = useUserIDForm();
    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col gap-4 h-full mt-8 self-center md:w-1/2 lg:w-1/3 justify-between">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-blue-light">
                    <label htmlFor="identityType" className={selectedOption ? "opacity-100" : "opacity-0"}>Tipo</label>
                    <UserIDSelect options={selectOptions} value={selectedOption} onChange={onSelectedOptionChange}/>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-blue-light w-full">
                    <label htmlFor="identityNumber" className={userID ? "opacity-100" : "opacity-0"}>Número de
                        identidad</label>
                    <input type="text" placeholder="Número de documento"
                           className="text-blue-dark placeholder-[#0F95CE] rounded-md px-4 py-5 w-full"
                           value={userID} onChange={(e) => onUserIDChange(e.target.value)}/>
                </div>
            </div>
            <AppNextButton disabled={!validateUserID()} title="Continuar"/>
        </form>
    );
}

export default UserIDForm;
