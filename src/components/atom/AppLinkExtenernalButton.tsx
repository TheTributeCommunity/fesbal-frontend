import ButtonProps from "../../types/ButtonProps";
import {FC} from "react";
import {Link} from "react-router-dom";
interface AppLinkButtonProps extends ButtonProps {
    link: string
}
const AppLinkExternalButton: FC<AppLinkButtonProps> = ({bgColor = 'bg-primary-color', title, link}) => {

    return (
        <a href={link} className={`app-button ${bgColor}`}>
            <p>
                {title}
            </p>
        </a>
    );
};

export default AppLinkExternalButton;