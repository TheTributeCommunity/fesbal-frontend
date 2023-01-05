import IdentificationSelect from "../atom/IdentificationSelect";
import IdentificationInput from "../atom/IdentificationInput";
import AppContinueButton from "../atom/AppContinueButton";
import {IdentificationSelectOption} from "../../types/IdentificationSelectProps";
import useIdentificationForm from "../../hooks/useIdentificationForm";

const selectOptions: IdentificationSelectOption[] = ["DNI", "NIE"]

const IdentificationForm = () => {
    const {
        selectedOption,
        inputValue,
        validateInput,
        handleSelectChange,
        handleInputChange,
        handleSubmit
    } = useIdentificationForm();

    return (
        <form noValidate onSubmit={handleSubmit}
              className="flex flex-col gap-4 h-full mt-8 self-center md:w-1/2 lg:w-1/3 justify-between">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1.5 text-sm text-blue-light">
                    <label htmlFor="identityType" className={selectedOption ? "opacity-100" : "opacity-0"}>Tipo</label>
                    <IdentificationSelect options={selectOptions} value={selectedOption}
                                          onChange={handleSelectChange}/>
                </div>
                <div className="flex flex-col gap-1.5 text-sm text-blue-light w-full">
                    <label htmlFor="identityNumber" className={inputValue ? "opacity-100" : "opacity-0"}>Número de
                        identidad</label>
                    <IdentificationInput value={inputValue} onChange={handleInputChange}/>
                </div>
            </div>
            <AppContinueButton disabled={!validateInput()}/>
        </form>
    )
}

export default IdentificationForm
