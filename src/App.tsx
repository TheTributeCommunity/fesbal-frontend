import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import PasswordRecovery from "./pages/PasswordRecovery";
import PickupPoint from "./pages/PickupPoint";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/password-recovery" element={<PasswordRecovery/>}/>
                <Route path="/pickup-point" element={<PickupPoint/>}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
        </Router>
    );
}

export default App;
