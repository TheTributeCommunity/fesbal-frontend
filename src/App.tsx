import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginPasswordRecovery from "./pages/LoginPasswordRecovery";
import LoginScreen from "./pages/LoginScreen";
import NotificationDetails from "./pages/NotificationDetails";
import NotificationsScreen from "./pages/NotificationsScreen";
import PickupPoint from "./pages/PickupPoint";
import ProfileEditEmail from "./pages/ProfileEditEmail";
import ProfileEditNewPassword from "./pages/ProfileEditNewPassword";
import ProfileEditPrevPassword from "./pages/ProfileEditPrevPassword";
import ProfileScreen from "./pages/ProfileScreen";
import RegisterID from "./pages/RegisterID";
import RegisterLegal from "./pages/RegisterLegal";
import RegisterReferral from "./pages/RegisterReferral";
import RegisterRequestSent from "./pages/RegisterRequestSent";
import WelcomeScreen from "./pages/WelcomeScreen";
import MenuReferral from "./pages/MenuReferral";
import MenuReferralUpload from "./pages/MenuReferralUpload";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<WelcomeScreen/>}/>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/login/password-recovery" element={<LoginPasswordRecovery/>}/>
                <Route path="/referral" element={<MenuReferral/>}/>
                <Route path="/referral/upload" element={<MenuReferralUpload/>}/>
                <Route path="/notifications" element={<NotificationsScreen/>}/>
                <Route path="/notifications/:id" element={<NotificationDetails/>}/>
                <Route path="/pickup-point" element={<PickupPoint/>}/>
                <Route path="/profile/*" element={<ProfileScreen/>}/>
                <Route path="/profile/edit-email" element={<ProfileEditEmail/>}/>
                <Route path="/profile/edit-new-password" element={<ProfileEditNewPassword/>}/>
                <Route path="/profile/edit-prev-password" element={<ProfileEditPrevPassword/>}/>
                <Route path="/register" element={<RegisterLegal/>}/>
                <Route path="/register/id" element={<RegisterID/>}/>
                <Route path="/register/referral" element={<RegisterReferral/>}/>
                <Route path="/register/request-sent" element={<RegisterRequestSent/>}/>
                <Route path="/welcome" element={<WelcomeScreen/>}/>
            </Routes>
        </Router>
    );
}

export default App;
