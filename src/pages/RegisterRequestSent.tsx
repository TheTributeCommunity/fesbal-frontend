import AppLinkButton from "../components/atom/AppLinkButton";
import {useTranslation} from "react-i18next";
import {namespaces} from "../i18n/i18n.constants";
import LogoFesbalWhiteIcon from "../components/icons/LogoFesbalWhiteIcon";
import RequestSentIcon from "../components/icons/RequestSentIcon";
import {AppRoute} from "../enums/app-route";
import {RecipientUserService} from "../services/recipient-user-service";
import {RecipientUser} from "../models/recipient-user";
import { useState} from "react";
import {AuthService} from "../services/auth-service";
import {onAuthStateChanged} from "firebase/auth";

const RegisterRequestSent = () => {
    const {t: translate} = useTranslation(namespaces.pages.registerRequestSent);
    const [recipientUser, setRecipientUser] = useState<RecipientUser>({id: '', firstName: '', lastName: '', dateOfBirth: '', phone: '', typeOfIdentityDocument:'', identityDocumentNumber: ''});
    const [relativesCount, setRelativesCount] = useState<string>('0')

    // TODO - Replace by a context AuthContext
    onAuthStateChanged(AuthService.auth, (user) => {
        RecipientUserService.getAuth().then((recipientUser) => {
            setRecipientUser(recipientUser)

            if (recipientUser.relativesIds) {
                setRelativesCount(recipientUser.relativesIds.length.toString())
            }
        });
    });

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
                        <li className="col-span-2 py-1">
                            <p className="font-label text-primary-color">{translate('fullName')}</p>
                            <p className="font-text">{recipientUser.firstName}</p>
                        </li>
                        <li className="col-span-1 py-1">
                            <p className="font-label text-primary-color">{translate('id')}</p>
                            <p className="font-text">{recipientUser.typeOfIdentityDocument}</p>
                        </li>
                        <li className="col-span-1 py-1">
                            <p className="font-label text-primary-color">{translate('birthDate')}</p>
                            <p className="font-text">{recipientUser.dateOfBirth}</p>
                        </li>
                        <li className="col-span-1 py-1">
                            <p className="font-label text-primary-color">{translate('email')}</p>
                            <p className="font-text">{recipientUser.email}</p>
                        </li>
                        <li className="col-span-1 py-1">
                            <p className="font-label text-primary-color">{translate('phone')}</p>
                            <p className="font-text">{recipientUser.phone}</p>
                        </li>
                        <li className="col-span-2 py-1">
                            <p className="font-label text-primary-color">{translate('familyMembers')}</p>
                            <p className="font-text">{relativesCount}</p>
                        </li>
                    </ul>
                </div>
                <AppLinkButton title={translate("next")} link={AppRoute.WELCOME}/>
            </div>
        </div>
    );
};

export default RegisterRequestSent;
