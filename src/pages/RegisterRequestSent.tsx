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
    const {t} = useTranslation(namespaces.pages.registerRequestSent);
    const user = UsersMock[0];
    const getFamilyMembers = (id: string) => {
        const user = users.find(user => user.id === id);
        return user?.familyMembers;
    }
    const getPersonalData = (): PersonalDataItemProps[] => {
        return [
            {
                title: t('fullName'),
                value: user.fullName,
            },
            {
                title: t('id'),
                value: user.id
            },
            {
                title: t('birthDate'),
                value: user.birthDate,
            },
            {
                title: t('email'),
                value: user.email,
                hasEditButton: true,
                goTo: `/profile/edit-email`,
            },
            {
                title: t('phone'),
                value: user.phone,
            },
            {
                title: 'Miembros de la familia',
                value: getFamilyMembers(user.id)?.length.toString() || '0',
            }
        ];
    };

    return (
        <div className="flex h-screen flex-col justify-between p-8 bg-primary-color text-secondary-color">
            <div className="h-1/6"></div>
            <div className="flex h-1/3 justify-center self-center md:w-1/2 lg:w-1/3">
                <LogoFesbalWhiteIcon/>
            </div>
            <div
                className="flex h-3/5 flex-col justify-between self-center whitespace-pre-line rounded-lg bg-white p-4 md:w-1/2 md:p-8 lg:w-1/3 w-full">
                <RequestSentIcon/>
                <div className="flex flex-col justify-center items-center">
                    <h1 className="mb-5 font-big-title">{t("title")}</h1>
                    <ul className="flex flex-col gap-0.5">
                        {getPersonalData().map((item, index) => (
                            <RegisterPersonalDataItem title={item.title} value={item.value} key={index}/>
                        ))}
                    </ul>
                </div>
                <AppLinkButton title={t("next")} link="/welcome"/>
            </div>
        </div>
    );
};

export default RegisterRequestSent;
