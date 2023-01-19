import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";
import classNames from "classnames";


const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = "bg-primary-color", onClick}) => {
    const btnClasses = classNames(
        'rounded-2xl',
        'flex',
        'items-center',
        'justify-center',
        'py-5',
        'text-white',
        'font-button',
        bgColor,
        {
            'disabled:bg-white': disabled,
            'disabled:text-primary-color': disabled,
            'border': disabled,
            'border-primary-color': disabled,
            'disabled:opacity-50': disabled,
        },
    );

    const buttonType = onClick ? "button" : "submit";
    return (
        <button className={btnClasses} disabled={disabled} type={buttonType} onClick={onClick}>
            {title}
        </button>
    );
};


export default AppNextButton
