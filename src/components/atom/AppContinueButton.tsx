import {FC} from "react";

const AppContinueButton = ({disabled}: {disabled: boolean}) => {
    return (
        <button
            className="rounded-2xl flex items-center justify-center py-5 text-white font-bold bg-blue-light
                disabled:bg-white disabled:text-[#0F95CE] border border-[#0F95CE] disabled:opacity-50"
            disabled={disabled} type="submit">
            Continuar
        </button>
    );
}

export default AppContinueButton
