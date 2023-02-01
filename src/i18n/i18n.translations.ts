import { burgerMenuEn, burgerMenuEs } from "./components/burgerMenu";
import { appCalendarEs, appCalendarEn } from "./atoms/appCalendar";
import { namespaces } from "./i18n.constants";
import { loginPasswordRecoveryEn, loginPasswordRecoveryEs } from "./pages/loginPasswordRecovery";
import { loginScreenEn, loginScreenEs } from "./pages/loginScreen";
import { loginValidatePhoneEn, loginValidatePhoneEs } from "./pages/loginValidatePhone";
import { menuDeleteAccountEn, menuDeleteAccountEs } from "./pages/menuDeleteAccount";
import { menuReferralEn, menuReferralEs } from "./pages/menuReferral";
import { profileEditEmailEn, profileEditEmailEs } from "./pages/profileEditEmail";
import { profileEditNewPasswordEn, profileEditNewPasswordEs } from "./pages/profileEditNewPassword";
import { profileEditPrevPasswordEn, profileEditPrevPasswordEs } from "./pages/profileEditPrevPassword";
import { profileScreenEn, profileScreenEs } from "./pages/profileScreen";
import { registerFamilyMembersEn, registerFamilyMembersEs } from "./pages/registerFamilyMembers";
import { registerUserEn, registerUserEs } from "./pages/registerUser";
import {registerEmailEn, registerEmailEs} from "./pages/registerEmail";
import { registerLegalEn, registerLegalEs } from "./pages/registerLegal";
import { registerReferralEn, registerReferralEs } from "./pages/registerReferral";
import { registerReferralSendDateEn, registerReferralSendDateEs } from "./pages/registerReferralSendDate";
import { registerRequestSentEn, registerRequestSentEs } from "./pages/registerRequestSent";
import {registerPhoneEn, registerPhoneEs} from "./pages/registerPhone";
import {welcomeScreenEn, welcomeScreenEs} from "./pages/welcomeScreen";
import {validatePhoneEn, validatePhoneEs} from "./pages/validatePhone";
import { recipientLandingEs, recipientLandingEn } from "./pages/recipientLanding";

export const es = {
    [namespaces.common]: {
        buttons: {
            ok: "Aceptar",
            cancel: "Cancelar",
        },
    },
    [namespaces.pages.loginPasswordRecovery]: loginPasswordRecoveryEs,
    [namespaces.pages.loginScreen]: loginScreenEs,
    [namespaces.pages.loginValidatePhone]: loginValidatePhoneEs,
    [namespaces.pages.menuDeleteAccount]: menuDeleteAccountEs,
    [namespaces.pages.menuReferral]: menuReferralEs,
    [namespaces.pages.notifications]: { title: "Notificaciones" },
    [namespaces.pages.pickupPoint]: { title: "Punto de recogida", address: "Dirección" },
    [namespaces.pages.profileEditEmail]: profileEditEmailEs,
    [namespaces.pages.profileEditNewPassword]: profileEditNewPasswordEs,
    [namespaces.pages.profileEditPrevPassword]: profileEditPrevPasswordEs,
    [namespaces.pages.profileScreen]: profileScreenEs,
    [namespaces.pages.registerFamilyMembers]: registerFamilyMembersEs,
    [namespaces.pages.registerUser]: registerUserEs,
    [namespaces.pages.registerPhone]: registerPhoneEs,
    [namespaces.pages.registerLegal]: registerLegalEs,
    [namespaces.pages.registerEmail]: registerEmailEs,
    [namespaces.pages.registerReferral]: registerReferralEs,
    [namespaces.pages.registerReferralSendDate]: registerReferralSendDateEs,
    [namespaces.pages.registerRequestSent]: registerRequestSentEs,
    [namespaces.components.burgerMenu]: burgerMenuEs,
    [namespaces.pages.validatePhone]: validatePhoneEs,
    [namespaces.pages.welcomeScreen]: welcomeScreenEs,
    [namespaces.atoms.appCalendar]: appCalendarEs,
    [namespaces.pages.recipientLanding]: recipientLandingEs,
};

export const en = {
    [namespaces.common]: {
        buttons: {
            ok: "Ok",
            cancel: "Cancel",
        },
    },
    [namespaces.pages.loginPasswordRecovery]: loginPasswordRecoveryEn,
    [namespaces.pages.loginScreen]: loginScreenEn,
    [namespaces.pages.loginValidatePhone]: loginValidatePhoneEn,
    [namespaces.pages.menuDeleteAccount]: menuDeleteAccountEn,
    [namespaces.pages.menuReferral]: menuReferralEn,
    [namespaces.pages.notifications]: { title: "Notifications" },
    [namespaces.pages.pickupPoint]: { title: "Pickup point", address: "Address" },
    [namespaces.pages.profileEditEmail]: profileEditEmailEn,
    [namespaces.pages.profileEditNewPassword]: profileEditNewPasswordEn,
    [namespaces.pages.profileEditPrevPassword]: profileEditPrevPasswordEn,
    [namespaces.pages.profileScreen]: profileScreenEn,
    [namespaces.pages.registerFamilyMembers]: registerFamilyMembersEn,
    [namespaces.pages.registerUser]: registerUserEn,
    [namespaces.pages.registerEmail]: registerEmailEn,
    [namespaces.pages.registerPhone]: registerPhoneEn,
    [namespaces.pages.registerLegal]: registerLegalEn,
    [namespaces.pages.registerReferral]: registerReferralEn,
    [namespaces.pages.registerReferralSendDate]: registerReferralSendDateEn,
    [namespaces.pages.registerRequestSent]: registerRequestSentEn,
    [namespaces.components.burgerMenu]: burgerMenuEn,
    [namespaces.pages.validatePhone]: validatePhoneEn,
    [namespaces.pages.welcomeScreen]: welcomeScreenEn,
    [namespaces.atoms.appCalendar]: appCalendarEn,
    [namespaces.pages.recipientLanding]: recipientLandingEn,
};
