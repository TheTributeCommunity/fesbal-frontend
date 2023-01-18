import BurgerMenuIcon from "../icons/BurgerMenuIcon";

const AppBurgerMenuButton = () => {
    return (
        <button className="bg-white h-12 w-12 rounded-full flex justify-center items-center app-shadow fixed top-4 right-4">
            <BurgerMenuIcon />
        </button>
    );
};

export default AppBurgerMenuButton;
