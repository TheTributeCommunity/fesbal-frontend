import AppLinkButton from "../components/atom/AppLinkButton";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LogoFesbalWhiteIcon from "../components/icons/LogoFesbalWhiteIcon";
import RequestSentIcon from "../components/icons/RequestSentIcon";
import UsersMock from "../mocks/users.mock";
import users from "../mocks/users.mock";
import PersonalDataItemProps from "../types/PersonalDataItemProps";
import RegisterPersonalDataItem from "../components/atom/RegisterPersonalDataItem";

const RegisterRequestSent = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerRequestSent);
    const user = UsersMock[0];
    const getFamilyMembers = (id: string) => {
        const user = users.find(user => user.id === id);
        return user?.familyMembers;
    }
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: translate('fullName'),
                value: user.fullName,
            },
            {
                title: translate('id'),
                value: user.id
            },
            {
                title: translate('birthDate'),
                value: user.birthDate,
            },
            {
                title: translate('email'),
                value: user.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
            },
            {
                title: translate('phone'),
                value: user.phone,
            },
            {
                title: 'Miembros de la familia',
                value: getFamilyMembers(user.id)?.length.toString() || '0',
            }
        ];
    };

    return (
        <div className="flex h-screen items-center justify-center p-8 bg-primary-color text-secondary-color">
            <div className="app-logo">
                <LogoFesbalWhiteIcon/>
            </div>
            <div className="mt-8 flex w-full flex-col gap-4 self-end rounded-xl bg-white p-8 md:w-1/2 lg:w-1/3">
                <RequestSentIcon/>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="mb-5 font-big-title">{translate("title")}</h1>
                    <ul className="flex flex-col gap-0.5">
                        {getPersonalData().map((item, index) => (
                            <RegisterPersonalDataItem title={item.title} value={item.value} key={index}/>
                        ))}
                    </ul>
                </div>
                <AppLinkButton title={translate("next")} link="/welcome"/>
            </div>
        </div>
    );
};

export default RegisterRequestSent;
