import {FC} from "react";
import AppNextButtonProps from "../../types/AppNextButtonProps";

const AppNextButton: FC<AppNextButtonProps> = ({title, disabled}) => {
    return (
        <button
            className="rounded-2xl flex items-center justify-center py-5 text-white font-bold bg-blue-light
    disabled:bg-white disabled:text-[#0F95CE] border border-[#0F95CE] disabled:opacity-50"
            disabled={disabled} type="submit">
            {title}
        </button>
    );
}

export default AppNextButton
