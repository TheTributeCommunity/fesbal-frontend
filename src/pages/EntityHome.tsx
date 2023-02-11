import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppWrapper from "../components/molecules/AppWrapper";
import LogoFesbalIcon from "../components/icons/LogoFesbalIcon";
import AppPageHeader from "../components/molecules/AppPageHeader";
import ClockIcon from "../components/icons/ClockIcon";
import BellIcon from "../components/icons/BellIcon";
import SearchIcon from "../components/icons/SearchIcon";
import {Link} from "react-router-dom";

const EntityHome = () => {
    const {t: translate} = useTranslation(namespaces.pages.entityHome);
    const alerts = 2;

    return (
        <>
            <AppWrapper showBurger showBackButton={false} title={translate("title")}>
                <div className="flex h-full w-full flex-col items-center mt-8 gap-4 text-secondary-color text-center">
                    <AppPageHeader title={translate("address")}/>
                    <LogoFesbalIcon/>
                </div>
                <div className="app-bottom-nav w-full">
                    <Link to="entity/login">
                        <ClockIcon/>
                    </Link>
                    <Link to="entity/login">
                        <SearchIcon/>
                    </Link>
                    <Link to="entity/login" className="relative">
                        <BellIcon/>
                        {alerts > 0 && (
                            <span className="absolute bottom-4 left-2.5 w-4 h-4 bg-warning-color rounded-full text-white text-xs flex items-center justify-center">
                                {alerts}
                            </span>
                        )}
                    </Link>
                </div>
            </AppWrapper>
        </>
    );
};

export default EntityHome;
