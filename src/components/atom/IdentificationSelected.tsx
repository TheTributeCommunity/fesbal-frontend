import React, {FC} from "react";
import {IdentificationSelectOption} from "../../types/IdentificationSelectProps";
import DropDownIcon from "../icons/DropDown";

const IdentificationSelected: FC<{ value: IdentificationSelectOption }> = ({value}) => {
    return (
        <div className="flex flex-row items-center px-4 py-5">
            {value
                ? <span className="text-blue-dark">{value}</span>
                : <span className="text-blue-light">Tipo</span>}
            <DropDownIcon/>
        </div>
    );
};

export default IdentificationSelected
