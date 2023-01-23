import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";
import classNames from "classnames";


const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = "bg-primary-color"}) => {
    const btnClasses = classNames(
        'flex items-center justify-center rounded-2xl py-5 text-center text-white font-button w-full',
        {
            'cursor-not-allowed border bg-white opacity-50 text-primary-color border-primary-color': disabled,
            [bgColor]: bgColor
        }
    );
    return (
        <button
            className={btnClasses} disabled={disabled} type="submit">
            {title}
        </button>
    );
}

export default AppNextButton
