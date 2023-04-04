import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {AppRoute} from './enums/app-route'
import AddFamilyMember from './pages/AddFamilyMember'
import EntityHome from './pages/EntityHome'
import EntityLogin from './pages/EntityLogin'
import EntityLoginPasswordRecovery from './pages/EntityLoginPasswordRecovery'
import EntityProfile from './pages/EntityProfile'
import EntityUserScanned from './pages/EntityUserScanned'
import LoginScreen from './pages/LoginScreen'
import MenuReferral from './pages/MenuReferral'
import MenuReferralUpload from './pages/MenuReferralUpload'
import NotificationDetails from './pages/NotificationDetails'
import NotificationsScreen from './pages/NotificationsScreen'
import {PickupDetails} from './pages/PickupDetails'
import PickupHistoryPage from './pages/PickupHistoryPage'
import PickupPoint from './pages/PickupPoint'
import ProfileEditEmail from './pages/ProfileEditEmail'
import ProfileEditNewPassword from './pages/ProfileEditNewPassword'
import ProfileEditPrevPassword from './pages/ProfileEditPrevPassword'
import ProfileScreen from './pages/ProfileScreen'
import RegisterFamilyMembers from './pages/RegisterFamilyMembers'
import RegisterLegal from './pages/RegisterLegal'
import RegisterReferral from './pages/RegisterReferral'
import RegisterReferralSendDate from './pages/RegisterReferralSendDate'
import RegisterRequestSent from './pages/RegisterRequestSent'
import RegisterEmail from './pages/RegisterEmail'
import ValidatePhone from './pages/ValidatePhone'
import WelcomeScreen from './pages/WelcomeScreen'
import RecipientLandingScreen from './pages/RecipientLandingScreen'
import SplashScreen from './pages/SplashScreen'
import RegisterPhone from './pages/RegisterPhone'
import RegisterUser from './pages/RegisterUser'
import LoginValidatePhone from './pages/LoginValidatePhone'
import EntityFoodSearch from './pages/EntityFoodSearch'
import EntityQuantityMeasurement from './pages/EntityQuantityMeasurement'
import EntityUserSignature from './pages/EntityUserSignature'
import EntityDeliveryHistory from './pages/EntityDeliveryHistory'
import { EntityDeliveryDetails } from './pages/EntityDeliveryDetails'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<WelcomeScreen/>}/>
                <Route path={AppRoute.LOGIN} element={<LoginScreen/>}/>
                <Route path={AppRoute.LOGIN_VALIDATE_PHONE} element={<LoginValidatePhone/>}/>
                <Route path={AppRoute.NOTIFICATIONS} element={<NotificationsScreen/>}/>
                <Route path={`${AppRoute.NOTIFICATIONS}/:id`} element={<NotificationDetails/>}/>
                <Route path={AppRoute.PICKUP_POINT} element={<PickupPoint/>}/>
                <Route path={AppRoute.PROFILE} element={<ProfileScreen/>}/>
                <Route path={AppRoute.PROFILE_EDIT_EMAIL} element={<ProfileEditEmail/>}/>
                <Route path={AppRoute.PROFILE_EDIT_NEW_PASSWORD} element={<ProfileEditNewPassword/>}/>
                <Route path={AppRoute.PROFILE_EDIT_PREV_PASSWORD} element={<ProfileEditPrevPassword/>}/>
                <Route path={AppRoute.RECIPIENT_HOME} element={<RecipientLandingScreen/>}/>
                <Route path={AppRoute.REFERRAL} element={<MenuReferral/>}/>
                <Route path={AppRoute.REFERRAL_UPLOAD} element={<MenuReferralUpload/>}/>
                <Route path={AppRoute.REGISTER_LEGAL} element={<RegisterLegal/>}/>
                <Route path={AppRoute.REGISTER_EMAIL} element={<RegisterEmail/>}/>
                <Route path={AppRoute.REGISTER} element={<RegisterUser/>}/>
                <Route path={AppRoute.REGISTER_PHONE} element={<RegisterPhone/>}/>
                <Route path={AppRoute.REGISTER_FAMILY_MEMBERS} element={<RegisterFamilyMembers/>}/>
                <Route path={AppRoute.REGISTER_FAMILY_MEMBERS_ADD} element={<AddFamilyMember/>}/>
                <Route path={AppRoute.REGISTER_REFERRAL_SHEET} element={<RegisterReferral/>}/>
                <Route path={AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE} element={<RegisterReferralSendDate/>}/>
                <Route path={AppRoute.REGISTER_REQUEST_SENT} element={<RegisterRequestSent/>}/>
                <Route path={AppRoute.REGISTER_VALIDATE_PHONE} element={<ValidatePhone/>}/>
                <Route path={AppRoute.WELCOME} element={<SplashScreen/>}/>
                <Route path={AppRoute.PICKUP_HISTORY} element={<PickupHistoryPage/>}/>
                <Route path={AppRoute.ENTITY_FOOD_SEARCH} element={<EntityFoodSearch/>}/>
                <Route path={AppRoute.PICKUP_HISTORY} element={<PickupHistoryPage/>}/>
                <Route path={AppRoute.PICKUP_DETAILS} element={<PickupDetails/>}/>
                <Route path={AppRoute.ENTITY_HOME} element={<EntityHome/>}/>
                <Route path={AppRoute.ENTITY_LOGIN} element={<EntityLogin/>}/>
                <Route path={AppRoute.ENTITY_LOGIN_PASSWORD_RECOVERY} element={<EntityLoginPasswordRecovery/>}/>
                <Route path={AppRoute.ENTITY_DELIVERY_HISTORY} element={<EntityDeliveryHistory/>}/>
                <Route path={AppRoute.ENTITY_DELIVERY_HISTORY_DETAILS} element={<EntityDeliveryDetails/>}/>
                <Route path={AppRoute.ENTITY_QUANTITY_MEASUREMENT} element={<EntityQuantityMeasurement/>}/>
                <Route path={AppRoute.ENTITY_PROFILE} element={<EntityProfile/>}/>
                {/* TODO: replace with user search component instead */}
                <Route path={AppRoute.ENTITY_USER_SEARCH} element={<EntityUserScanned />}/>
                <Route path={AppRoute.ENTITY_USER_SCANNED} element={<EntityUserScanned/>}/>
                <Route path={AppRoute.ENTITY_USER_SIGNATURE} element={<EntityUserSignature/>}/>
                <Route path={AppRoute.ENTITY_NOTIFICATIONS} element={<NotificationsScreen/>}/>
                <Route path={`${AppRoute.ENTITY_NOTIFICATIONS}/:id`} element={<NotificationDetails/>}/>
            </Routes>
        </Router>
    )
}

export default App
