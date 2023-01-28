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
                span: 2
            },
            {
                title: translate('id'),
                value: user.id,
                span: 1
            },
            {
                title: translate('birthDate'),
                value: user.birthDate,
                span: 1
            },
            {
                title: translate('email'),
                value: user.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
                span: 1
            },
            {
                title: translate('phone'),
                value: user.phone,
                span: 1
            },
            {
                title: 'Miembros unidad familiar',
                value: getFamilyMembers(user.id)?.length.toString() || '0',
                span: 2
            }
        ];
    };

    return (
        <div className="h-screen flex flex-col justify-end bg-primary-color px-4 pb-4">
            <div className="app-logo">
                <LogoFesbalWhiteIcon/>
            </div>
            <div className="mx-auto w-full md:w-1/2 lg:w-1/3 px-8 pb-4 text-center bg-white rounded-xl text-secondary-color z-10">
                <RequestSentIcon/>
                <div className="flex flex-col">
                    <h1 className="mb-4 font-big-title">{translate("title")}</h1>
                    <ul className="grid grid-cols-2 gap-3 pb-2 text-left justify-between">
                        {getPersonalData().map((item, index) => (
                            <RegisterPersonalDataItem title={item.title} value={item.value} span={item.span} key={index}/>
                        ))}
                    </ul>
                </div>
                <AppLinkButton title={translate("next")} link="/welcome"/>
            </div>
        </div>
    );
};

export default RegisterRequestSent;
