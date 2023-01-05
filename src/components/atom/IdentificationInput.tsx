import {FC} from "react";
import IdentificationInputProps from "../../types/IdentificationInputProps";

const IdentificationInput: FC<IdentificationInputProps> = ({value, onChange}) => {
    return (
        <input type="text" placeholder="Número de documento"
               className="text-blue-dark placeholder-[#0F95CE] rounded-md px-4 py-5 w-full"
               value={value}
               onChange={(e) => onChange(e.target.value)}
        />
    );
};

export default IdentificationInput
