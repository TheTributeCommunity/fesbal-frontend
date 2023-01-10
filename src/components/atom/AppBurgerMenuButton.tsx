import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

const AppBurgerMenuButton = () => {
    return (
        <button className="bg-white h-12 w-12 rounded-full flex justify-center items-center app-shadow">
            <FontAwesomeIcon icon={faBars} className="text-secondary-color"/>
        </button>
    );
};

export default AppBurgerMenuButton;
