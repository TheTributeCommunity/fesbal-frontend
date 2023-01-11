import ButtonProps from "../../types/ButtonProps";
import {FC} from "react";
import {Link} from "react-router-dom";

const AppLinkButton: FC<ButtonProps> = ({bgColor = 'bg-primary-color', title, toGo}) => {

    return (
        <Link to={toGo as string}
              className={`rounded-2xl flex items-center justify-center py-5 text-white font-button ${bgColor} px-2`}>
            <p>
                {title}
            </p>
        </Link>
    );
};

export default AppLinkButton;
