import AppBackButton from "../atom/AppBackButton";
import PageHeaderProps from "../../types/PageHeaderProps";

export default ({link, title, description}: PageHeaderProps) => {
    return (
        <div className="app-page__header">
            <AppBackButton link={link}/>
            <div>
                <h1 className="mb-4 font-big-title">{title}</h1>
                <p className="font-text">{description}</p>
            </div>
        </div>
    );
};

