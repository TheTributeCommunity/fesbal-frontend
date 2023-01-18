import {useTranslation} from "react-i18next";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import BancoDeAlimentosIcon from "../components/icons/BancoDeAlimentosIcon";
import BottomNavBar from "../components/molecules/BottomNavBar";
import {namespaces} from "../i18n/i18n.constants";
import usersMock from "../mocks/users.mock";

const RecipientLandingScreen = (): JSX.Element => {
    const {t} = useTranslation(namespaces.pages.recipientLanding);
    const user = usersMock[0];
    return (
        <>
            <div className="h-screen flex flex-col page-bg text-secondary-color p-8">
                <span className="text-2xl leading-7 font-bold font-sans self-center text-dark-blue">FESBAL</span>
                <AppBurgerMenuButton />
                <div className="flex flex-col gap-8 justify-start items-center self-center md:w-1/2 lg:w-1/3 pt-6">
                    <div className="py-12">
                        <BancoDeAlimentosIcon />
                    </div>
                    <div className="flex flex-col items-center gap-11 font-roboto-flex">
                        <div className="flex flex-col gap-4 items-center">
                            <span className="font-bold text-3xl">{user.fullName}</span>
                            <span className="text-dark-blue text-2xl leading-7 font-medium">{user.id}</span>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <span className="text-dark-blue text-base font-light">{t("nextDelivery")}</span>
                            <span className="text-base leading-5 font-normal">
                                {user.nextPickup?.toLocaleDateString()}
                            </span>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <span className="text-dark-blue text-base font-light">{t("derivationLimit")}</span>
                            <span className="text-base leading-5 font-normal">
                                {user.derivationLimit?.toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNavBar />
        </>
    );
};

export default RecipientLandingScreen;
