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
import WelcomeScreen from "./pages/WelcomeScreen";
import EditNewPassword from "./pages/EditNewPassword";
import RegistrationUserID from "./pages/RegistrationUserID";
import RegistrationName from "./pages/RegistrationName";

const EmailCheck = (event: ChangeEvent<HTMLInputElement> ) => {
  const email = event.target;
  const button = document.getElementById("continue_button");

  if (email.value == "") {
    button.disabled = true
  }
  else {
    button.disabled = !email.validity.valid
  }
}

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
                <Route path="/register" element={<RegisterLegal/>}/>
                <Route path="/register/id" element={<RegisterID/>}/>
                <Route path="/welcome" element={<WelcomeScreen/>}/>
                <Route path="/profile/edit-new-password" element={<EditNewPassword/>}/>
                <Route path="/registration/user-id" element={<RegistrationUserID/>}/>
                <Route path="/registration/name" element={<RegistrationName/>}/>
                <Route path="*" element={<LoginScreen/>}/>
            </Routes>
        </Router>
    );
}

export default App;
