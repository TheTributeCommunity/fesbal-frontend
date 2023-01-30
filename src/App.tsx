import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPasswordRecovery from "./pages/LoginPasswordRecovery";
import LoginScreen from "./pages/LoginScreen";
import MenuReferral from "./pages/MenuReferral";
import MenuReferralUpload from "./pages/MenuReferralUpload";
import NotificationDetails from "./pages/NotificationDetails";
import NotificationsScreen from "./pages/NotificationsScreen";
import PickupPoint from "./pages/PickupPoint";
import ProfileEditEmail from "./pages/ProfileEditEmail";
import ProfileEditNewPassword from "./pages/ProfileEditNewPassword";
import ProfileEditPrevPassword from "./pages/ProfileEditPrevPassword";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterFamilyMembers from "./pages/RegisterFamilyMembers";
import RegisterLegal from "./pages/RegisterLegal";
import RegisterReferral from "./pages/RegisterReferral";
import RegisterRequestSent from "./pages/RegisterRequestSent";
import ValidatePhone from "./pages/ValidatePhone";
import WelcomeScreen from "./pages/WelcomeScreen";
import PickupHistoryPage from './pages/PickupHistoryPage';
import RecipientLandingScreen from "./pages/RecipientLandingScreen";
import SplashScreen from "./pages/SplashScreen";
import RegisterPhone from "./pages/RegisterPhone";
import AddFamilyMember from "./pages/AddFamilyMember";
import RegisterUser from "./pages/RegisterUser";
import {AppRoute} from "./enums/app-route";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<WelcomeScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/login/password-recovery" element={<LoginPasswordRecovery/>}/>
                <Route path="/notifications" element={<NotificationsScreen/>}/>
                <Route path="/notifications/:id" element={<NotificationDetails/>}/>
                <Route path="/pickup-point" element={<PickupPoint/>}/>
                <Route path="/profile/*" element={<ProfileScreen/>}/>
                <Route path="/profile/edit-email" element={<ProfileEditEmail/>}/>
                <Route path="/profile/edit-new-password" element={<ProfileEditNewPassword/>}/>
                <Route path="/profile/edit-prev-password" element={<ProfileEditPrevPassword/>}/>
                <Route path="/recipient-home" element={<RecipientLandingScreen/>}/>
                <Route path="/referral" element={<MenuReferral/>}/>
                <Route path="/referral/upload" element={<MenuReferralUpload/>}/>
                <Route path="/register/legal" element={<RegisterLegal/>}/>
                <Route path="/register" element={<RegisterUser/>}/>
                <Route path={AppRoute.REGISTER_PHONE} element={<RegisterPhone/>}/>
                <Route path={AppRoute.REGISTER_FAMILY_MEMBERS} element={<RegisterFamilyMembers/>}/>
                <Route path="/register/family-members/add" element={<AddFamilyMember/>}/>
                <Route path="/register/referral" element={<RegisterReferral/>}/>
                <Route path="/register/request-sent" element={<RegisterRequestSent/>}/>
                <Route path={AppRoute.REGISTER_VALIDATE_PHONE} element={<ValidatePhone/>}/>
                <Route path={AppRoute.WELCOME} element={<SplashScreen/>}/>
                <Route path="/pickup-historic" element={<PickupHistoryPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
