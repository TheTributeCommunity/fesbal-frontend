import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock} from "@fortawesome/free-regular-svg-icons";

const AppWatchButton = () => {
    return (
        <button>
            <FontAwesomeIcon icon={faClock} className="text-primary-color"/>
        </button>
    );
};

export default AppWatchButton;
