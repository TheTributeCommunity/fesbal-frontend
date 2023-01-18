import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import PasswordRecovery from "./pages/PasswordRecovery";
import PickupPoint from "./pages/PickupPoint";
import NotificationsScreen from "./pages/NotificationsScreen";
import NotificationDetails from "./pages/NotificationDetails";
import EditEmail from "./pages/EditEmail";
import EditPrevPassword from "./pages/EditPrevPassword";
import ProfileScreen from "./pages/ProfileScreen";
import EditNewPassword from "./pages/EditNewPassword";
import RegistrationUserID from "./pages/RegistrationUserID";
import RecipientLandingScreen from "./pages/RecipientLandingScreen";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen />} />
                <Route path="/password-recovery" element={<PasswordRecovery />} />
                <Route path="/pickup-point" element={<PickupPoint />} />
                <Route path="/notifications" element={<NotificationsScreen />} />
                <Route path="/notifications/:id" element={<NotificationDetails />} />
                <Route path="/profile/*" element={<ProfileScreen />} />
                <Route path="/recipient-home" element={<RecipientLandingScreen />} />
                <Route path="/profile/edit-email" element={<EditEmail />} />
                <Route path="/profile/edit-prev-password" element={<EditPrevPassword />} />
                <Route path="/profile/edit-new-password" element={<EditNewPassword />} />
                <Route path="/registration/user-id" element={<RegistrationUserID />} />
                <Route path="*" element={<LoginScreen />} />
            </Routes>
        </Router>
    );
}

export default App;
