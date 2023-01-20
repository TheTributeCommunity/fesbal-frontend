import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppBackButton from "../components/atom/AppBackButton";
import AppBurgerMenuButton from "../components/atom/AppBurgerMenuButton";
import AppNextButton from "../components/atom/AppNextButton";
import ReferralsMock from "../mocks/referrals.mock";
import MenuReferralCard from "../components/atom/MenuReferralCard";
import {useNavigate} from "react-router-dom";

const MenuReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.menuReferral);
    const navigate = useNavigate();
    const referrals = ReferralsMock.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    const goToUpload = () => navigate("/referral/upload");

    return (
        <div className="flex min-h-screen flex-col justify-between p-8 gap-8 page-bg text-secondary-color ">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3 w-full">
                <div className="flex flex-row items-center justify-between">
                    <AppBackButton link="/login"/>
                    <h1 className="text-primary-color font-mini-title">{translate('title')}</h1>
                    <AppBurgerMenuButton/>
                </div>
                {referrals.map((referral, index) => (
                    <MenuReferralCard
                        key={index}
                        fullname={referral.fullname}
                        uploadDate={referral.uploadDate}
                        familyMembers={referral.familyMembers}
                        expiredDate={referral.expiredDate}
                        status={referral.status}
                    />
                ))}
            </div>
            <div className="flex flex-col self-center md:w-1/2 lg:w-1/3 w-full">
                <AppNextButton title={translate('next')} onClick={goToUpload}/>
            </div>
        </div>
    );
}

export default MenuReferral;
