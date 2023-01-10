import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";

const AppLocationButton = () => {
    return (
        <button>
            <FontAwesomeIcon icon={faLocationDot} className="text-primary-color"/>
        </button>
    );
};

export default AppLocationButton;
