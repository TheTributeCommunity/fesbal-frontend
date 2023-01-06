import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./pages/LoginScreen";
import PasswordRecovery from "./pages/PasswordRecovery";
import PickupPoint from "./pages/PickupPoint";
import NotificationsScreen from "./pages/NotificationsScreen";
import NotificationDetails from "./pages/NotificationDetails";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginScreen/>}/>
                <Route path="/password-recovery" element={<PasswordRecovery/>}/>
                <Route path="/pickup-point" element={<PickupPoint/>}/>
                <Route path="/notifications" element={<NotificationsScreen/>}/>
                <Route path="/notifications/:id" element={<NotificationDetails/>}/>
                <Route path="*" element={<LoginScreen/>}/>
            </Routes>
        </Router>
    );
}

export default App;
