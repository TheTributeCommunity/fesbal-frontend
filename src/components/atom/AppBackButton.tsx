import LeftArrowIcon from "../icons/LeftArrow";

const AppBackButton = () => {
    return (
        <button
            className="bg-white h-12 w-12 rounded-full flex items-center justify-center app-shadow">
            <LeftArrowIcon/>
        </button>
    );
};

export default AppBackButton;
