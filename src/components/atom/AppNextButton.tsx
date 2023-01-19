import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";

const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = "bg-primary-color"}) => {
    return (
        <button
            className={`rounded-2xl flex items-center justify-center py-5 text-white font-bold ${bgColor}
            ${disabled ? "disabled:bg-white disabled:text-primary-color border border-primary-color disabled:opacity-50" : ""}`}
            disabled={disabled} type="submit">
            {title}
        </button>
    );
}

export default AppNextButton
