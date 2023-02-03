import {useNavigate} from "react-router-dom";
import LeftArrowIcon from "../icons/LeftArrowIcon";

const AppBackButton = () => {
    const navigate = useNavigate()

    return (
        <button onClick={() => navigate(-1)} className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
            <LeftArrowIcon/>
        </button>
    )
}

export default AppBackButton
