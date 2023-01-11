import BurgerMenuIcon from "../icons/BurgerMenuIcon";

const AppBurgerMenuButton = () => {
    return (
        <button className="flex h-12 w-12 items-center justify-center rounded-full bg-white app-shadow">
            <BurgerMenuIcon/>
        </button>
    );
};

export default AppBurgerMenuButton;
