import LeftArrowIcon from "../icons/LeftArrow";
import {NavLink} from "react-router-dom";

const AppBackButton = ({goTo}: { goTo: string }) => {
    return (
        <NavLink to={goTo}
            className="bg-white h-12 w-12 rounded-full flex items-center justify-center app-shadow">
            <LeftArrowIcon/>
        </NavLink>
    );
};

export default AppBackButton;
