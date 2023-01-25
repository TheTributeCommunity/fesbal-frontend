import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";
import classNames from "classnames";


const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = "bg-primary-color", onClick, id}) => {
    const btnClasses = classNames(
        'app-button',
        {
            'app-button--disabled': disabled,
            [bgColor]: bgColor
        }
    );
    const buttonType = onClick ? "button" : "submit";

    return (
        <button
            className={btnClasses} disabled={disabled} type={buttonType} onClick={onClick} id={id}>
            {title}
        </button>
    );
}

export default AppNextButton
