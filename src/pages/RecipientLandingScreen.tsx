import {useTranslation} from "react-i18next";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppWrapper from "../components/molecules/AppWrapper";
import {namespaces} from "../i18n/i18n.constants";
import usersMock from "../mocks/users.mock";

const RecipientLandingScreen = (): JSX.Element => {
    const {t: translate} = useTranslation(namespaces.pages.recipientLanding);
    const user = usersMock[0];
    return (
        <AppWrapper title="FESBAL" titleClassName="text-2xl leading-7 font-bold font-sans self-center text-dark-blue" showBurger>
            <div className="flex flex-col gap-8 justify-start items-center w-full ">
                <div className="py-12">
                    <LogoFesbalIcon />
                </div>
                <div className="flex flex-col items-center gap-11 font-roboto-flex">
                    <div className="flex flex-col gap-4 items-center">
                        <span className="font-bold text-3xl">{user.fullName}</span>
                        <span className="text-dark-blue text-2xl leading-7 font-medium">{user.id}</span>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <span className="text-dark-blue text-base font-light">{translate("nextDelivery")}</span>
                        <span className="text-base leading-5 font-normal">
                            {user.nextPickup?.toLocaleDateString()}
                        </span>
                    </div>
                    <div className="flex flex-col gap-3 items-center">
                        <span className="text-dark-blue text-base font-light">{translate("derivationLimit")}</span>
                        <span className="text-base leading-5 font-normal">
                            {user.derivationLimit?.toLocaleDateString()}
                        </span>
                    </div>
                </div>
            </div>
        </AppWrapper >
    );
};

export default RecipientLandingScreen;