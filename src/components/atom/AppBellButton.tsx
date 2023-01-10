import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-regular-svg-icons";

const AppBellButton = () => {
    return (
        <button>
            <FontAwesomeIcon icon={faBell} className="text-primary-color"/>
        </button>
    );
};

export default AppBellButton;
