import LeftArrowIcon from "../icons/LeftArrowIcon";
import {Link} from "react-router-dom";

const AppBackButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo} className="bg-white h-12 w-12 rounded-full flex items-center justify-center app-shadow">
            <LeftArrowIcon/>
        </Link>
    );
};

export default AppBackButton;
