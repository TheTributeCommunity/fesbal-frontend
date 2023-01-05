import IndentificationSelect from "../components/molecules/IdentificationSelect";
import AppBackButton from "../components/atom/AppBackButton";
import {useState} from "react";
import {IdentificationSelectOption} from "../types/IdentificationSelectProps";
import {validateDNI, validateNIE} from "../helpers"

const selectOptions: IdentificationSelectOption[] = ["DNI", "NIE"]
const UserIdentificationNumber = () => {
    const [selectedOption, setSelectedOption] = useState<IdentificationSelectOption>(undefined);
    const [inputValue, setInputValue] = useState<string>("");
    const validateInput = (): boolean => {
        return selectedOption === "DNI" ? validateDNI(inputValue) : validateNIE(inputValue);
    }
    const handleOnChange = (value: IdentificationSelectOption) => setSelectedOption(value);

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
                        <IndentificationSelect options={selectOptions} value={selectedOption}
                                               onChange={handleOnChange}/>
                    </div>
                    <div className="flex flex-col gap-1 text-sm text-blue-light relative">
                        {inputValue &&
                            <label htmlFor="identityNumber" className="absolute bottom-16 left-0">Número de
                                documento</label>}
                        <input type="text" placeholder="Número de documento"
                               className="text-blue-dark placeholder-[#0F95CE] rounded-md px-4 py-5 w-full"
                               value={inputValue}
                               onChange={(e) => setInputValue(e.target.value)}
                        />
                    </div>
                </form>
            </div>

            <button
                className="rounded-2xl flex items-center justify-center py-5 text-white font-bold bg-blue-light
                disabled:bg-white disabled:text-[#0F95CE] border border-[#0F95CE] disabled:opacity-50"
                disabled={!validateInput()}
            >
                Continuar
            </button>
        </div>
    )
}

export default UserIdentificationNumber
