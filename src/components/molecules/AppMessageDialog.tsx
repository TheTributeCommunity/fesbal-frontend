import { FC } from "react";
import AppNextButton from "../atom/AppNextButton";

interface AppMessageDialogProps {
    icon?: React.ReactNode;
    title: string;
    titleClassname?: string;
    description: string;
    descriptionClassname?: string;
    buttonText: string;
    buttonBgColor?: string;
    buttonOnClick?: () => void;
}

const AppMessageDialog: FC<AppMessageDialogProps> = ({
    icon,
    title,
    titleClassname,
    description,
    descriptionClassname,
    buttonText,
    buttonBgColor,
    buttonOnClick,
}) => {
    return (
        <div className="absolute top-0 left-0 bg-secondary-color bg-opacity-40 z-50 w-full h-full">

			<div className="absolute left-4 right-4 bottom-6 p-6 pt-10 text-center text-secondary-color font-roboto-flex bg-white rounded-2xl">
				<div className="flex flex-col">
                    <div className="mb-6 mx-auto">
					    {icon}
                    </div>
                    <h2 className={titleClassname + " mb-8 font-big-title"}>{title}</h2>
                
                    <p className={descriptionClassname + " font-light mb-12 text-base"}>{description}</p>
                
				</div>
                <div>
                    <AppNextButton title={buttonText} onClick={buttonOnClick} bgColor={buttonBgColor}/>
                </div>
			</div>

		</div>
    );
};

export default AppMessageDialog;
