import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";

const AppNextButton: FC<ButtonProps> = ({title, disabled}) => {
    return (
        <button
            className="rounded-2xl flex items-center justify-center py-5 text-white font-bold bg-primary-color
    disabled:bg-white disabled:text-[#0F95CE] border border-[#0F95CE] disabled:opacity-50"
            disabled={disabled} type="submit">
            {title}
        </button>
    );
}

export default AppNextButton
