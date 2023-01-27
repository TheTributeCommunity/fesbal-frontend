import AppLinkButton from "./AppLinkButton";
import SplashCardProps from "../../types/SplashCardProps";

const SplashCard = ({title, description, login, link, backgroundColor, textColor, buttonBackGroundColor}: SplashCardProps) => {
    return (
        <div className={`${backgroundColor} ${textColor} h-1/2`}>
            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pt-16">
                <header className="font-big-title mb-4">{title}</header>
                <div>{description}</div>
                <footer className="pt-8">
                    <AppLinkButton bgColor={buttonBackGroundColor} title={login} link={link}/>
                </footer>
            </div>
        </div>
    )
}

export default SplashCard;