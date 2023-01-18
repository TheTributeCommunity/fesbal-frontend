import {namespaces} from "./i18n.constants";
import {editEmailEn, editEmailEs} from "./pages/editEmail";
import {editNewPasswordEn, editNewPasswordEs} from "./pages/editNewPassword";
import {editPrevPasswordEn, editPrevPasswordEs} from "./pages/editPrevPassword";
import {loginScreenEn, loginScreenEs} from "./pages/loginScreen";
import {passwordRecoveryEn, passwordRecoveryEs} from "./pages/passwordRecovery";
import {profileScreenEn, profileScreenEs} from "./pages/profileScreen";
import { recipientLandingEs, recipientLandingEn } from "./pages/recipientLanding";
import {registrationUserIDEn, registrationUserIDEs} from "./pages/registrationUserID";

export const es = {
    [namespaces.common]: {
        buttons: {
            ok: "Aceptar",
            cancel: "Cancelar",
        },
    },
    [namespaces.pages.editEmail]: editEmailEs,
    [namespaces.pages.editNewPassword]: editNewPasswordEs,
    [namespaces.pages.editPrevPassword]: editPrevPasswordEs,
    [namespaces.pages.loginScreen]: loginScreenEs,
    [namespaces.pages.recipientLanding]: recipientLandingEs,
    [namespaces.pages.notifications]: {title: "Notificaciones"},
    [namespaces.pages.passwordRecovery]: passwordRecoveryEs,
    [namespaces.pages.pickupPoint]: {title: "Punto de recogida", address: "Dirección"},
    [namespaces.pages.profileScreen]: profileScreenEs,
    [namespaces.pages.registrationUserID]: registrationUserIDEs,

};

export const en = {
    [namespaces.common]: {
        buttons: {
            ok: "Ok",
            cancel: "Cancel",
        },
    },
    [namespaces.pages.editEmail]: editEmailEn,
    [namespaces.pages.editNewPassword]: editNewPasswordEn,
    [namespaces.pages.editPrevPassword]: editPrevPasswordEn,
    [namespaces.pages.loginScreen]: loginScreenEn,
    [namespaces.pages.recipientLanding]: recipientLandingEn,
    [namespaces.pages.notifications]: {title: "Notifications"},
    [namespaces.pages.passwordRecovery]: passwordRecoveryEn,
    [namespaces.pages.pickupPoint]: {title: "Pickup point", address: "Address"},
    [namespaces.pages.profileScreen]: profileScreenEn,
    [namespaces.pages.registrationUserID]: registrationUserIDEn,
};
