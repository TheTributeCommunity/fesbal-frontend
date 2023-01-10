import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";


const AppBackButton = ({goTo}: { goTo: string }) => {
    return (
        <Link to={goTo} className="bg-white h-12 w-12 rounded-full flex items-center justify-center app-shadow">
            <FontAwesomeIcon icon={faArrowLeft} className="text-secondary-color"/>
        </Link>
    );
};

export default AppBackButton;
