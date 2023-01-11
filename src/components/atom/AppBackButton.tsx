import {Link} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";


const AppBackButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo} className="flex h-12 w-12 items-center justify-center rounded-full bg-white app-shadow">
            <LeftArrowIcon/>
        </Link>
    );
};

export default AppBackButton;
