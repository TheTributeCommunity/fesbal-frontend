import AppBackButton from "../atom/AppBackButton";
import AppBurgerMenuButton from "../atom/AppBurgerMenuButton";
import PageHeaderProps from "../../types/PageHeaderProps";

export default ({title, link}: PageHeaderProps) => {
    return (
        <div className="app-page__header">
            <div className="flex flex-row items-center justify-between">
                <AppBackButton link={link}/>
                <p className="text-primary-color font-mini-title">{title}</p>
                <AppBurgerMenuButton/>
            </div>
        </div>
    );
};
