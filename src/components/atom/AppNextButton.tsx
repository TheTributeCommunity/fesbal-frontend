import {FC} from "react";
import ButtonProps from "../../types/ButtonProps";
import classNames from "classnames";


const AppNextButton: FC<ButtonProps> = ({title, disabled = false, bgColor = "bg-primary-color"}) => {
    const btnClasses = classNames(
        'app-button',
        {
            'app-button--disabled': disabled,
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
