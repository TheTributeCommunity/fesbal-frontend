import {useState} from "react";
import IdentificationSelect from "../components/atom/IdentificationSelect";
import AppBackButton from "../components/atom/AppBackButton";
import {IdentificationSelectOption} from "../types/IdentificationSelectProps";
import {validateDNI, validateNIE} from "../helpers"
import AppContinueButton from "../components/atom/AppContinueButton";
import IdentificationInput from "../components/atom/IdentificationInput";

const selectOptions: IdentificationSelectOption[] = ["DNI", "NIE"]
const UserIdentificationNumber = () => {
    const [selectedOption, setSelectedOption] = useState<IdentificationSelectOption>(undefined);
    const [inputValue, setInputValue] = useState<string>("");
    const validateInput = (): boolean => {
        return selectedOption === "DNI" ? validateDNI(inputValue) : validateNIE(inputValue);
    }
    const handleSelectOnChange = (value: IdentificationSelectOption) => setSelectedOption(value);
    const handleContinueClick = () => console.log("Continue");

    return (
        <div className="h-screen flex flex-col justify-between p-8 page-bg text-blue-dark">
            <div className="mb-8">
                <AppBackButton/>
                <div className="mb-10 mt-6">
                    <h1 className="text-1xl font-bold mb-4">
                        Documento de Identidad</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero
                        sit amet.</p>
                </div>
                <form action="" className="flex flex-row gap-4">
                    <div className="flex flex-col gap-1 text-sm text-blue-light relative">
                        {selectedOption &&
                            <label htmlFor="identityType" className="absolute bottom-16 left-0">Tipo</label>}
                        <IdentificationSelect options={selectOptions} value={selectedOption}
                                              onChange={handleSelectOnChange}/>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-blue-light relative">
                        {inputValue &&
                            <label htmlFor="identityNumber" className="absolute bottom-16 left-0">Número de
                                documento</label>}
                        <IdentificationInput value={inputValue} onChange={setInputValue}/>
                    </div>
                </form>
            </div>
            <AppContinueButton disabled={!validateInput()} onClick={handleContinueClick}/>
        </div>
    )
}

export default UserIdentificationNumber
