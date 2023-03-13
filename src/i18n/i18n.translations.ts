import {appCalendarEn, appCalendarEs} from './atoms/appCalendar'
import {burgerMenuEn, burgerMenuEs} from './components/burgerMenu'
import {entityLoginEn, entityLoginEs} from './pages/entityLogin'
import {entityLoginPasswordRecoveryEn, entityLoginPasswordRecoveryEs} from './pages/entityLoginPasswordRecovery'
import {entityProfileEn, entityProfileEs} from './pages/entityProfile'
import {entityUserScannedEn, entityUserScannedEs} from './pages/entityUserScanned'
import {loginScreenEn, loginScreenEs} from './pages/loginScreen'
import {loginValidatePhoneEn, loginValidatePhoneEs} from './pages/loginValidatePhone'
import {menuDeleteAccountEn, menuDeleteAccountEs} from './pages/menuDeleteAccount'
import {menuReferralEn, menuReferralEs} from './pages/menuReferral'
import {namespaces} from './i18n.constants'
import {profileEditEmailEn, profileEditEmailEs} from './pages/profileEditEmail'
import {profileEditNewPasswordEn, profileEditNewPasswordEs} from './pages/profileEditNewPassword'
import {profileEditPrevPasswordEn, profileEditPrevPasswordEs} from './pages/profileEditPrevPassword'
import {profileScreenEn, profileScreenEs} from './pages/profileScreen'
import {recipientLandingEn, recipientLandingEs} from './pages/recipientLanding'
import {registerEmailEn, registerEmailEs} from './pages/registerEmail'
import {registerFamilyMembersEn, registerFamilyMembersEs} from './pages/registerFamilyMembers'
import {registerLegalEn, registerLegalEs} from './pages/registerLegal'
import {registerPhoneEn, registerPhoneEs} from './pages/registerPhone'
import {registerReferralEn, registerReferralEs} from './pages/registerReferral'
import {registerReferralSendDateEn, registerReferralSendDateEs} from './pages/registerReferralSendDate'
import {registerRequestSentEn, registerRequestSentEs} from './pages/registerRequestSent'
import {registerUserEn, registerUserEs} from './pages/registerUser'
import {validatePhoneEn, validatePhoneEs} from './pages/validatePhone'
import {welcomeScreenEn, welcomeScreenEs} from './pages/welcomeScreen'
import {pickupDetailsEn, pickupDetailsEs} from './pages/pickupDetails'
import {entityUserSignatureEn, entityUserSignatureEs} from './pages/entityUserSignature'

export const es = {
    [namespaces.common]: {
        buttons: {
            ok: 'Aceptar',
            cancel: 'Cancelar',
        },
    },
    [namespaces.pages.entityFoodSearch]: {title: 'Buscador de alimentos', placeholder: 'Busca un alimento'},
    [namespaces.pages.entityHome]: {title: 'BALPA', address: 'Asociación de vecinos de Máspalomas'},
    [namespaces.pages.entityLogin]: entityLoginEs,
    [namespaces.pages.entityLoginPasswordRecovery]: entityLoginPasswordRecoveryEs,
    [namespaces.pages.entityUserScanned]: entityUserScannedEs,
    [namespaces.pages.entityUserSignature]: entityUserSignatureEs,
    [namespaces.pages.entityProfile]: entityProfileEs,
    [namespaces.pages.entityQuantityMeasurement]: {title: 'Indicador de cantidad', addQuantity: 'Añadir cantidad'},
    [namespaces.pages.loginScreen]: loginScreenEs,
    [namespaces.pages.loginValidatePhone]: loginValidatePhoneEs,
    [namespaces.pages.menuDeleteAccount]: menuDeleteAccountEs,
    [namespaces.pages.menuReferral]: menuReferralEs,
    [namespaces.pages.notifications]: {title: 'Notificaciones'},
    [namespaces.pages.pickupPoint]: {title: 'Punto de recogida', address: 'Dirección'},
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
    [namespaces.pages.pickupDetails]: pickupDetailsEs,
}

export const en = {
    [namespaces.common]: {
        buttons: {
            ok: 'Ok',
            cancel: 'Cancel',
        },
    },
    [namespaces.pages.entityFoodSearch]: {title: 'Food search', placeholder: 'Search for a food'},
    [namespaces.pages.entityHome]: {title: 'BALPA', address: 'Asociación de vecinos de Máspalomas'},
    [namespaces.pages.entityLogin]: entityLoginEn,
    [namespaces.pages.entityLoginPasswordRecovery]: entityLoginPasswordRecoveryEn,
    [namespaces.pages.entityUserScanned]: entityUserScannedEn,
    [namespaces.pages.entityUserSignature]: entityUserSignatureEn,
    [namespaces.pages.entityProfile]: entityProfileEn,
    [namespaces.pages.entityQuantityMeasurement]: {title: 'Quantity indicator', addQuantity: 'Add quantity'},
    [namespaces.pages.loginScreen]: loginScreenEn,
    [namespaces.pages.loginValidatePhone]: loginValidatePhoneEn,
    [namespaces.pages.menuDeleteAccount]: menuDeleteAccountEn,
    [namespaces.pages.menuReferral]: menuReferralEn,
    [namespaces.pages.notifications]: {title: 'Notifications'},
    [namespaces.pages.pickupPoint]: {title: 'Pickup point', address: 'Address'},
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
    [namespaces.pages.pickupDetails]: pickupDetailsEn,
}
