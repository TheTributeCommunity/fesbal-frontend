import {Link} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";


const AppBackButton = ({link}: { link: string }) => {
    return (
        <Link to={link} className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
            <LeftArrowIcon/>
        </Link>
    );
};

export default AppBackButton;
