import { useTranslation } from "react-i18next";
import AppBellButton from "../components/atom/AppBellButton";
import AppBurgerMenu from "../components/atom/AppBurgerMenu";
import AppLocationButton from "../components/atom/AppLocationButton";
import AppWatchButton from "../components/atom/AppWatchButton";
import BancoDeAlimentosIcon from "../components/icons/BancoDeAlimentosIcon";
import { namespaces } from "../i18n/i18n.constants";
import usersMock from "../mocks/users.mock";

const RecipientLandingScreen = (): JSX.Element => {
  const { t } = useTranslation(namespaces.pages.recipientLanding);
  const user = usersMock[0];
  return (
    <>
      <div className="h-screen flex flex-col page-bg text-secondary-color p-8">
        <span className="text-2xl leading-7 font-bold font-sans self-center text-dark-blue">
          FESBAL
        </span>
        <AppBurgerMenu />
        <div className="flex flex-col gap-8 justify-start items-center self-center md:w-1/2 lg:w-1/3 pt-6">
          <div className="py-12">
            <BancoDeAlimentosIcon />
          </div>
          <div className="flex flex-col items-center gap-11 font-roboto-flex">
            <div className="flex flex-col gap-4 items-center">
              <span className="font-bold text-3xl">{user.fullName}</span>
              <span className="text-dark-blue text-2xl leading-7 font-medium">
                {user.id}
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-dark-blue text-base font-light">
                {t("nextDelivery")}
              </span>
              <span className="text-base leading-5 font-normal">
                {user.nextPickup?.toLocaleDateString()}
              </span>
            </div>
            <div className="flex flex-col gap-3 items-center">
              <span className="text-dark-blue text-base font-light">
                {t("derivationLimit")}
              </span>
              <span className="text-base leading-5 font-normal">
                {user.derivationLimit?.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-row justify-center">
        <nav className="flex flex-row justify-between items-center px-auto w-full md:w-1/2 lg:w-1/3 bg-white rounded-xl p-4 fixed bottom-0 px-10">
          <AppWatchButton />
          <AppLocationButton />
          <AppBellButton />
        </nav>
      </div>
    </>
  );
};

export default RecipientLandingScreen;
