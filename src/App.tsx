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
import profile from './assets/profile.svg';
import notification from './assets/notification.svg';
import clock from './assets/clock.svg';
import vectorImg from './assets/vector.svg';
import document from './assets/paper.svg';
import help from './assets/help.svg';
import delete_account from './assets/delete_account.svg';
import turn_off from './assets/turn_off.svg';
import cross from './assets/cross.svg';
import MenuLink from './components/MenuLink';

function App() {
  return (
    <div className="App">
      <div className='Title'>
        FESBAL
      </div>
      <button id='XButton' onClick={() => {}}><img src={cross}/></button>
      <div className='MainMenu'>
        <MenuLink img={profile} link="#" linkName="Perfil"/>
        <MenuLink img={notification} link="#" linkName="Notificaciones"/>
        <MenuLink img={clock} link="#" linkName="Histórico de recogidas"/>
        <MenuLink img={vectorImg} link="#" linkName="Punto de recogida"/>
        <MenuLink img={document} link="#" linkName="Hoja de derivación"/>
        <MenuLink img={help} link="#" linkName="Ayuda"/>
        <MenuLink img={delete_account} link="#" linkName="Eliminar cuenta"/>
      </div>
      <div id='LogOut'>
        <MenuLink img={turn_off} link="#" linkName="Log out"/>
      </div>
    </div>
  );
>>>>>>> 7c8844f (Modificado App.tsx para prueba de MenuLink)
}

export default App;
