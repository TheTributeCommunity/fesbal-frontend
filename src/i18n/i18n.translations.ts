import {namespaces} from "./i18n.constants";
import {loginPasswordRecoveryEn, loginPasswordRecoveryEs} from "./pages/loginPasswordRecovery";
import {loginScreenEn, loginScreenEs} from "./pages/loginScreen";
import {profileEditEmailEn, profileEditEmailEs} from "./pages/profileEditEmail";
import {profileEditNewPasswordEn, profileEditNewPasswordEs} from "./pages/profileEditNewPassword";
import {profileEditPrevPasswordEn, profileEditPrevPasswordEs} from "./pages/profileEditPrevPassword";
import {profileScreenEn, profileScreenEs} from "./pages/profileScreen";
import {registerIDEn, registerIDEs} from "./pages/registerID";
import {registerLegalEn, registerLegalEs} from "./pages/registerLegal";

export const es = {
    [namespaces.common]: {
        buttons: {
            ok: "Aceptar",
            cancel: "Cancelar",
        },
    },
    [namespaces.pages.loginPasswordRecovery]: loginPasswordRecoveryEs,
    [namespaces.pages.loginScreen]: loginScreenEs,
    [namespaces.pages.notifications]: {title: "Notificaciones"},
    [namespaces.pages.pickupPoint]: {title: "Punto de recogida", address: "Dirección"},
    [namespaces.pages.profileEditEmail]: profileEditEmailEs,
    [namespaces.pages.profileEditNewPassword]: profileEditNewPasswordEs,
    [namespaces.pages.profileEditPrevPassword]: profileEditPrevPasswordEs,
    [namespaces.pages.profileScreen]: profileScreenEs,
    [namespaces.pages.registerID]: registerIDEs,
    [namespaces.pages.registerLegal]: registerLegalEs,
    [namespaces.pages.welcomeScreen]: {login: "Iniciar sesión", register: "Registrarse"},

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
    [namespaces.pages.notifications]: {title: "Notifications"},
    [namespaces.pages.pickupPoint]: {title: "Pickup point", address: "Address"},
    [namespaces.pages.profileEditEmail]: profileEditEmailEn,
    [namespaces.pages.profileEditNewPassword]: profileEditNewPasswordEn,
    [namespaces.pages.profileEditPrevPassword]: profileEditPrevPasswordEn,
    [namespaces.pages.profileScreen]: profileScreenEn,
    [namespaces.pages.registerID]: registerIDEn,
    [namespaces.pages.registerLegal]: registerLegalEn,
    [namespaces.pages.welcomeScreen]: {login: "Login", register: "Register"},
};
