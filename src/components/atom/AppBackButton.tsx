import {Link} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";


const AppBackButton = ({link}: { link: string }) => {
    return (
        <Link to={link} className="app-icon-button">
            <LeftArrowIcon/>
        </Link>
    );
};

export default AppBackButton;
