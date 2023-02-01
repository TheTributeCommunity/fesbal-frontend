import { FC } from "react";
import AppNextButton from "../atom/AppNextButton";

interface AppMessageDialogProps {
    icon?: React.ReactNode;
    visible?: boolean;
    title: string;
    titleClassname?: string;
    description: string;
    descriptionClassname?: string;
    buttonText: string;
    buttonBgColor?: string;
    buttonOnClick?: () => void;
    secondaryButtonText?: string | null;
    secondaryButtonBgColor?: string;
    secondaryButtonOnClick?: () => void;
}

const AppMessageDialog: FC<AppMessageDialogProps> = ({
    icon,
    visible = true,
    title,
    titleClassname,
    description,
    descriptionClassname,
    buttonText,
    buttonBgColor,
    buttonOnClick,
    secondaryButtonText,
    secondaryButtonBgColor,
    secondaryButtonOnClick,
}) => {
    return (
        <>
            {visible &&
                (<div className="absolute top-0 left-0 bg-secondary-color bg-opacity-40 z-50 w-full h-full">
                    <div className="absolute bottom-6 left-0 right-0 px-4 ">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-6 pt-10 text-center text-secondary-color font-roboto-flex bg-white rounded-2xl mx-auto">
                            <div className="flex flex-col">
                                <div className="mb-6 mx-auto">
                                    {icon}
                                </div>
                                <h2 className={titleClassname + " mb-8 font-big-title"}>{title}</h2>
                            
                                <p className={descriptionClassname + " font-light mb-12 text-base"}>{description}</p>
                            
                            </div>
                            <div className="flex gap-4">
                                {secondaryButtonText &&
                                    (<div className="flex-1">
                                        <AppNextButton title={secondaryButtonText} onClick={secondaryButtonOnClick} bgColor={secondaryButtonBgColor}/>
                                    </div>)
                                }
                                <div className="flex-1">
                                    <AppNextButton title={buttonText} onClick={buttonOnClick} bgColor={buttonBgColor}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </>
    );
};

export default AppMessageDialog;
