import {Link} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";


const AppBackButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo} className="app-icon-button">
            <LeftArrowIcon/>
        </Link>
    );
};

export default AppBackButton;
