import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppNextButton from "../components/atom/AppNextButton";
import ReferralsMock from "../mocks/referrals.mock";
import MenuReferralCard from "../components/atom/MenuReferralCard";
import {useNavigate} from "react-router-dom";
import AppPageBurgerHeader from "../components/molecules/AppPageBurgerHeader";

const MenuReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.menuReferral);
    const navigate = useNavigate();
    const referrals = ReferralsMock.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    const goToUpload = () => navigate("/referral/upload");

    return (
        <div className="app-page">
            <AppPageBurgerHeader title={translate("title")} link="/login"/>
            <div className="app-page__container gap-4">
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
            <div className="app-page__container">
            <AppNextButton title={translate('next')} onClick={goToUpload}/>
            </div>
        </div>
    );
}

export default MenuReferral;
