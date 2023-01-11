import ButtonProps from "../../types/ButtonProps";
import {FC} from "react";
import {Link} from "react-router-dom";
interface AppLinkButtonProps extends ButtonProps {
    link: string
}
const AppLinkButton: FC<AppLinkButtonProps> = ({bgColor = 'bg-primary-color', title, link}) => {

    return (
        <Link to={link as string}
              className={`rounded-2xl flex items-center justify-center py-5 text-white font-button ${bgColor} px-2`}>
            <p>
                {title}
            </p>
        </Link>
    );
};

export default AppLinkButton;
