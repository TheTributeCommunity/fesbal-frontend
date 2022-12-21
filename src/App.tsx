<<<<<<< HEAD
<<<<<<< HEAD
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
import RegisterID from "./pages/RegisterID";
import RegisterLegal from "./pages/RegisterLegal";
import RegisterReferral from "./pages/RegisterReferral";
import RegisterRequestSent from "./pages/RegisterRequestSent";
import RegisterName from "./pages/RegisterName";
import WelcomeScreen from "./pages/WelcomeScreen";
import PickupHistoryPage from './pages/PickupHistoryPage';

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
                <Route path="/referral" element={<MenuReferral/>}/>
                <Route path="/referral/upload" element={<MenuReferralUpload/>}/>
                <Route path="/register" element={<RegisterLegal/>}/>
                <Route path="/register/family-members" element={<RegisterFamilyMembers/>}/>
                <Route path="/register/id" element={<RegisterID/>}/>
                <Route path="/register/name" element={<RegisterName/>}/>
                <Route path="/register/referral" element={<RegisterReferral/>}/>
                <Route path="/register/request-sent" element={<RegisterRequestSent/>}/>
                <Route path="/welcome" element={<WelcomeScreen/>}/>
                <Route path="/pickup-historic" element={<PickupHistoryPage/>}/>
            </Routes>
        </Router>
    );
=======
import { useState } from 'react';
=======
>>>>>>> 9797a56 (Update: App.tsx, deleted unnecesary variables)
import './App.scss';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">
      <Menu/>
    </div>
  );
>>>>>>> 7c8844f (Modificado App.tsx para prueba de MenuLink)
}

export default App;
