import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { AppRoute } from './enums/app-route'
import AddFamilyMember from './pages/AddFamilyMember'
import EntityHome from './pages/EntityHome'
import EntityLogin from './pages/EntityLogin'
import EntityLoginPasswordRecovery from './pages/EntityLoginPasswordRecovery'
import EntityProfile from './pages/EntityProfile'
import EntityUserScanned from './pages/EntityUserScanned'
import LoginScreen from './pages/LoginScreen'
import LoginValidatePhone from './pages/LoginValidatePhone'
import MenuReferral from './pages/MenuReferral'
import MenuReferralUpload from './pages/MenuReferralUpload'
import NotificationDetails from './pages/NotificationDetails'
import NotificationsScreen from './pages/NotificationsScreen'
import { PickupDetails } from './pages/PickupDetails'
import PickupHistoryPage from './pages/PickupHistoryPage'
import PickupPoint from './pages/PickupPoint'
import ProfileEditEmail from './pages/ProfileEditEmail'
import ProfileEditNewPassword from './pages/ProfileEditNewPassword'
import ProfileEditPrevPassword from './pages/ProfileEditPrevPassword'
import ProfileScreen from './pages/ProfileScreen'
import RecipientLandingScreen from './pages/RecipientLandingScreen'
import RegisterEmail from './pages/RegisterEmail'
import RegisterFamilyMembers from './pages/RegisterFamilyMembers'
import RegisterLegal from './pages/RegisterLegal'
import RegisterPhone from './pages/RegisterPhone'
import RegisterReferral from './pages/RegisterReferral'
import RegisterReferralSendDate from './pages/RegisterReferralSendDate'
import RegisterRequestSent from './pages/RegisterRequestSent'
import RegisterUser from './pages/RegisterUser'
import SplashScreen from './pages/SplashScreen'
import ValidatePhone from './pages/ValidatePhone'
import WelcomeScreen from './pages/WelcomeScreen'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<WelcomeScreen/>}/>
                <Route path={AppRoute.LOGIN} element={<LoginScreen/>}/>
                <Route path={AppRoute.LOGIN_VALIDATE_PHONE} element={<LoginValidatePhone/>}/>
                <Route path="/notifications" element={<NotificationsScreen/>}/>
                <Route path="/notifications/:id" element={<NotificationDetails/>}/>
                <Route path="/pickup-point" element={<PickupPoint/>}/>
                <Route path="/profile/*" element={<ProfileScreen/>}/>
                <Route path="/profile/edit-email" element={<ProfileEditEmail/>}/>
                <Route path="/profile/edit-new-password" element={<ProfileEditNewPassword/>}/>
                <Route path="/profile/edit-prev-password" element={<ProfileEditPrevPassword/>}/>
                <Route path={AppRoute.RECIPIENT_HOME} element={<RecipientLandingScreen/>}/>
                <Route path="/referral" element={<MenuReferral/>}/>
                <Route path="/referral/upload" element={<MenuReferralUpload/>}/>
                <Route path="/register/legal" element={<RegisterLegal/>}/>
                <Route path="/register/email" element={<RegisterEmail/>}/>
                <Route path={AppRoute.REGISTER} element={<RegisterUser/>}/>
                <Route path={AppRoute.REGISTER_PHONE} element={<RegisterPhone/>}/>
                <Route path={AppRoute.REGISTER_FAMILY_MEMBERS} element={<RegisterFamilyMembers/>}/>
                <Route path={AppRoute.REGISTER_FAMILY_MEMBERS_ADD} element={<AddFamilyMember/>}/>
                <Route path={AppRoute.REGISTER_REFERRAL_SHEET} element={<RegisterReferral/>}/>
                <Route path={AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE} element={<RegisterReferralSendDate/>}/>
                <Route path="/register/request-sent" element={<RegisterRequestSent/>}/>
                <Route path={AppRoute.REGISTER_VALIDATE_PHONE} element={<ValidatePhone/>}/>
                <Route path={AppRoute.WELCOME} element={<SplashScreen/>}/>
                <Route path={AppRoute.PICKUP_HISTORY} element={<PickupHistoryPage/>}/>
                <Route path={AppRoute.PICKUP_DETAILS} element={<PickupDetails/>}/>
                <Route path={AppRoute.ENTITY_HOME} element={<EntityHome/>}/>
                <Route path={AppRoute.ENTITY_LOGIN} element={<EntityLogin/>}/>
                <Route path={AppRoute.ENTITY_LOGIN_PASSWORD_RECOVERY} element={<EntityLoginPasswordRecovery/>}/>
                <Route path={AppRoute.ENTITY_PROFILE} element={<EntityProfile/>}/>
                <Route path={AppRoute.ENTITY_USER_SCANNED} element={<EntityUserScanned/>}/>
            </Routes>
        </Router>
    )
}

export default App
