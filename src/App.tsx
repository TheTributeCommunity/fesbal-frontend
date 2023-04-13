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
import SplashScreen from './pages/SplashScreen'
import RecipientLandingScreen from './pages/RecipientLandingScreen'
import Welcome from './pages/Welcome'
import RegisterPhone from './pages/RegisterPhone'
import RegisterUser from './pages/RegisterUser'
import LoginValidatePhone from './pages/LoginValidatePhone'
import EntityFoodSearch from './pages/EntityFoodSearch'
import EntityQuantityMeasurement from './pages/EntityQuantityMeasurement'
import EntityUserSignature from './pages/EntityUserSignature'
import EntityDeliveryHistory from './pages/EntityDeliveryHistory'
import { EntityDeliveryDetails } from './pages/EntityDeliveryDetails'
import { UsersContext } from './contexts/usersContext'
import { getAuth, onIdTokenChanged, User } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { UserType } from './enums/UserType'
import ProtectedLayout from './components/atom/ProtectedLayout'
import Spinner from './components/atom/Spinner'
import BlankStage from './components/atom/BlankStage'
import { addLocale } from 'primereact/api'
import { BoosterClient } from './services/booster-service'

addLocale('en', {
    firstDayOfWeek: 1,
})

const App = () => {
    const [loggedUserType, setLoggedUserType] = useState<string>()
    const [firebaseUser, setFirebaseUser] = useState<User>()
    const [loadedAuthData, setLoadedAuthData] = useState(localStorage.getItem('token') ? false : true)

    useEffect(() => {
        onIdTokenChanged(getAuth(), user => {
            if (user) {
                !loadedAuthData && setLoadedAuthData(true)
                const userType = user.providerData[0].providerId === 'phone' ? UserType.RECIPIENT : UserType.ENTITY
                setLoggedUserType(userType)
                setFirebaseUser(user)
                user.getIdToken().then(token => localStorage.setItem('token', token)).then(() => { BoosterClient.resetStore()})
            } else {
                setLoggedUserType(undefined)
                setFirebaseUser(undefined)
                localStorage.removeItem('token')
                localStorage.removeItem('userGuest')
            }
        })
    }, [])

    if (!loadedAuthData) return (
        <BlankStage>
            <Spinner />
        </BlankStage>)

    return (
        <UsersContext.Provider value={{loggedUserType: loggedUserType, firebaseUser: firebaseUser}}>
            <Router>
                <Routes>
                    <Route path="*" element={<SplashScreen/>}/>
                    <Route path={AppRoute.LOGIN} element={<LoginScreen/>}/>
                    <Route path={AppRoute.LOGIN_VALIDATE_PHONE} element={<LoginValidatePhone/>}/>
                    <Route path={AppRoute.REGISTER_LEGAL} element={<RegisterLegal/>}/>
                    <Route path={AppRoute.REGISTER} element={<RegisterUser/>}/>
                    <Route path={AppRoute.REGISTER_PHONE} element={<RegisterPhone/>}/>
                    <Route path={AppRoute.REGISTER_VALIDATE_PHONE} element={<ValidatePhone/>}/>
                    <Route path={AppRoute.WELCOME} element={<Welcome/>}/>
                    <Route path={AppRoute.ENTITY_LOGIN} element={<EntityLogin/>}/>
                    <Route path={AppRoute.ENTITY_LOGIN_PASSWORD_RECOVERY} element={<EntityLoginPasswordRecovery/>}/>

                    <Route element={<ProtectedLayout allowedRoles={[UserType.RECIPIENT]}/>}>
                        <Route path={AppRoute.REGISTER_EMAIL} element={<RegisterEmail/>}/>
                        <Route path={AppRoute.REGISTER_FAMILY_MEMBERS} element={<RegisterFamilyMembers/>}/>
                        <Route path={AppRoute.REGISTER_FAMILY_MEMBERS_ADD} element={<AddFamilyMember/>}/>
                        <Route path={AppRoute.REGISTER_REFERRAL_SHEET} element={<RegisterReferral/>}/>
                        <Route path={AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE} element={<RegisterReferralSendDate/>}/>
                        <Route path={AppRoute.REGISTER_REQUEST_SENT} element={<RegisterRequestSent/>}/>
                        <Route path={AppRoute.PROFILE} element={<ProfileScreen/>}/>
                        <Route path={AppRoute.PROFILE_EDIT_EMAIL} element={<ProfileEditEmail/>}/>
                        <Route path={AppRoute.PROFILE_EDIT_NEW_PASSWORD} element={<ProfileEditNewPassword/>}/>
                        <Route path={AppRoute.PROFILE_EDIT_PREV_PASSWORD} element={<ProfileEditPrevPassword/>}/>
                        <Route path={AppRoute.RECIPIENT_HOME} element={<RecipientLandingScreen/>}/>
                        <Route path={AppRoute.REFERRAL} element={<MenuReferral/>}/>
                        <Route path={AppRoute.NOTIFICATIONS} element={<NotificationsScreen/>}/>
                        <Route path={`${AppRoute.NOTIFICATIONS}/:id`} element={<NotificationDetails/>}/>
                        <Route path={AppRoute.PICKUP_POINT} element={<PickupPoint/>}/>
                        <Route path={AppRoute.REFERRAL_UPLOAD} element={<MenuReferralUpload/>}/>
                        <Route path={AppRoute.PICKUP_HISTORY} element={<PickupHistoryPage/>}/>
                        <Route path={AppRoute.PICKUP_DETAILS} element={<PickupDetails/>}/>
                    </Route>

                    <Route element={<ProtectedLayout allowedRoles={[UserType.ENTITY]}/>}>
                        <Route path={AppRoute.ENTITY_FOOD_SEARCH} element={<EntityFoodSearch/>}/>
                        <Route path={AppRoute.ENTITY_HOME} element={<EntityHome/>}/>
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
                    </Route>
                </Routes>
            </Router>
        </UsersContext.Provider>
    )
}

export default App
