import {namespaces} from "./i18n.constants";
import {editEmailEn, editEmailEs} from "./pages/profileEditEmail";
import {editNewPasswordEn, editNewPasswordEs} from "./pages/profileEditNewPassword";
import {editPrevPasswordEn, editPrevPasswordEs} from "./pages/profileEditPrevPassword";
import {loginScreenEn, loginScreenEs} from "./pages/loginScreen";
import {passwordRecoveryEn, passwordRecoveryEs} from "./pages/loginPasswordRecovery";
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
    [namespaces.pages.loginPasswordRecovery]: passwordRecoveryEs,
    [namespaces.pages.loginScreen]: loginScreenEs,
    [namespaces.pages.notifications]: {title: "Notificaciones"},
    [namespaces.pages.pickupPoint]: {title: "Punto de recogida", address: "Dirección"},
    [namespaces.pages.profileEditEmail]: editEmailEs,
    [namespaces.pages.profileEditNewPassword]: editNewPasswordEs,
    [namespaces.pages.profileEditPrevPassword]: editPrevPasswordEs,
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
    [namespaces.pages.loginPasswordRecovery]: passwordRecoveryEn,
    [namespaces.pages.loginScreen]: loginScreenEn,
    [namespaces.pages.notifications]: {title: "Notifications"},
    [namespaces.pages.pickupPoint]: {title: "Pickup point", address: "Address"},
    [namespaces.pages.profileEditEmail]: editEmailEn,
    [namespaces.pages.profileEditNewPassword]: editNewPasswordEn,
    [namespaces.pages.profileEditPrevPassword]: editPrevPasswordEn,
    [namespaces.pages.profileScreen]: profileScreenEn,
    [namespaces.pages.registerID]: registerIDEn,
    [namespaces.pages.registerLegal]: registerLegalEn,
    [namespaces.pages.welcomeScreen]: {login: "Login", register: "Register"},
};
