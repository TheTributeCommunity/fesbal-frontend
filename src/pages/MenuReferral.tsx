import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import AppNextButton from "../components/atom/AppNextButton";
import ReferralsMock from "../mocks/referrals.mock";
import MenuReferralCard from "../components/atom/MenuReferralCard";
import {useNavigate} from "react-router-dom";
import AppWrapper from "../components/molecules/AppWrapper";

const MenuReferral = () => {
    const {t: translate} = useTranslation(namespaces.pages.menuReferral);
    const navigate = useNavigate();
    const referrals = ReferralsMock.sort((a, b) => b.uploadDate.getTime() - a.uploadDate.getTime());
    const goToUpload = () => navigate("/referral/upload");

    return (
        <AppWrapper title={translate("title")} link="/login">
            <div className="w-full flex flex-col gap-4">
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
                <AppNextButton title={translate('next')} onClick={goToUpload}/>
            </div>
            
        </AppWrapper>
    );
}

export default MenuReferral;
