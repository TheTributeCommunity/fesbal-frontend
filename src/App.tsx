import {BrowserRouter as Router, Route, Routes, useNavigate} from 'react-router-dom'
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
import UserSignature from './pages/UserSignature'
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
import jwtDecode from 'jwt-decode'
import RefreshTokenService from './services/refresh-token-service'
import ProfileEditNameAndSurname from './pages/ProfileEditNameAndSurname'
import ProfileEditBirthDate from './pages/ProfileEditBirthDate'
import ProfileEditPhoneNumber from './pages/ProfileEditPhoneNumber'
import ProfileEditValidatePhone from './pages/ProfileEditValidatePhone'
import RecipientSearch from './pages/RecipientSearch'
import { ExtendedJwt } from './types/ExtendedJwt'
import { useSubscription } from '@apollo/client'
import { SUBSCRIBE_TO_RECIPIENT_MESSAGES } from './services/recipient-user-service'
import { RecipientMessages } from './models/recipient-user'
import Notification from './types/Notification'
import PickupService from './services/PickupService'
import { PickupWithItems } from './types/Pickup'

addLocale('en', {
    firstDayOfWeek: 1, // set first day of the week to Monday
})

const App = () => {
    const [loggedUserType, setLoggedUserType] = useState<string>()
    const [firebaseUser, setFirebaseUser] = useState<User>()
    const [pickupToSign, setPickupToSign] = useState<PickupWithItems>()
    const [notifications, setNotificatinos] = useState<Notification[]>()
    const [loadedAuthData, setLoadedAuthData] = useState(localStorage.getItem('token') ? false : true)
    const navigate = useNavigate()

    useEffect(() => {
        onIdTokenChanged(getAuth(), user => {
            if (user) {
                !loadedAuthData && setLoadedAuthData(true)
                user.getIdToken().then(token => {
                    localStorage.setItem('token', token)
                    const decoded = jwtDecode<ExtendedJwt>(token)
                    const userType = decoded.role === 'entity' ? UserType.ENTITY : UserType.RECIPIENT
                    if (!firebaseUser || firebaseUser.uid !== user.uid) {
                        // only change state if this is a different user,
                        // we don't want to re-render the component tree with token refreshes
                        setLoggedUserType(userType)
                        setFirebaseUser(user)
                    }
                    // set refresh token callbacks
                    decoded.exp && decoded.iat && RefreshTokenService.refreshOnFocusAndAt(new Date(decoded.iat * 1000), new Date(decoded.exp * 1000))
                    BoosterClient.resetStore()
                })
            } else {
                setLoggedUserType(undefined)
                setFirebaseUser(undefined)
                localStorage.removeItem('token')
                localStorage.removeItem('userGuest')
            }
        })
    }, [])

    useSubscription(SUBSCRIBE_TO_RECIPIENT_MESSAGES,
        {
            variables: { id: firebaseUser?.uid ?? '' },
            skip: firebaseUser && loggedUserType === UserType.RECIPIENT ? false : true,
            onSubscriptionData: ({ subscriptionData }) => {
                const recipientMessages = subscriptionData.data.RecipientReadModel as RecipientMessages
                setNotificatinos(recipientMessages.notifications ?? [])
                if (recipientMessages.pendingSignsIds) {
                    PickupService.getPickupDetails(recipientMessages.pendingSignsIds[0])
                        .then(pickup => setPickupToSign(pickup))
                        .then(() => navigate(AppRoute.USER_SIGNATURE))
                }
            }
        })

    if (!loadedAuthData) return (
        <BlankStage>
            <Spinner />
        </BlankStage>)

    return (
        <UsersContext.Provider value={{loggedUserType, firebaseUser, notifications, pickupToSign}}>
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
                        <Route path={AppRoute.PROFILE_EDIT_NAME_AND_SURNAME} element={<ProfileEditNameAndSurname/>}/>
                        <Route path={AppRoute.PROFILE_EDIT_BIRTHDATE} element={<ProfileEditBirthDate/>}/>
                        <Route path={AppRoute.PROFILE_EDIT_PHONE_NUMBER} element={<ProfileEditPhoneNumber />} />
                        <Route path={AppRoute.PROFILE_EDIT_VALIDATE_PHONE_NUMBER} element={<ProfileEditValidatePhone />} />
                        <Route path={AppRoute.RECIPIENT_HOME} element={<RecipientLandingScreen/>}/>
                        <Route path={AppRoute.REFERRAL} element={<MenuReferral/>}/>
                        <Route path={AppRoute.NOTIFICATIONS} element={<NotificationsScreen/>}/>
                        <Route path={`${AppRoute.NOTIFICATIONS}/:id`} element={<NotificationDetails/>}/>
                        <Route path={AppRoute.PICKUP_POINT} element={<PickupPoint/>}/>
                        <Route path={AppRoute.REFERRAL_UPLOAD} element={<MenuReferralUpload/>}/>
                        <Route path={AppRoute.PICKUP_HISTORY} element={<PickupHistoryPage/>}/>
                        <Route path={AppRoute.PICKUP_DETAILS} element={<PickupDetails/>}/>
                        <Route path={AppRoute.USER_SIGNATURE} element={<UserSignature/>}/>
                    </Route>

                    <Route element={<ProtectedLayout allowedRoles={[UserType.ENTITY]}/>}>
                        <Route path={AppRoute.ENTITY_FOOD_SEARCH} element={<EntityFoodSearch/>}/>
                        <Route path={AppRoute.ENTITY_HOME} element={<EntityHome/>}/>
                        <Route path={AppRoute.ENTITY_DELIVERY_HISTORY} element={<EntityDeliveryHistory/>}/>
                        <Route path={AppRoute.ENTITY_DELIVERY_HISTORY_DETAILS} element={<EntityDeliveryDetails/>}/>
                        <Route path={AppRoute.ENTITY_QUANTITY_MEASUREMENT} element={<EntityQuantityMeasurement/>}/>
                        <Route path={AppRoute.ENTITY_PROFILE} element={<EntityProfile/>}/>
                        <Route path={AppRoute.ENTITY_USER_SEARCH} element={<RecipientSearch />}/>
                        <Route path={AppRoute.ENTITY_USER_SCANNED} element={<EntityUserScanned/>}/>
                        <Route path={AppRoute.ENTITY_NOTIFICATIONS} element={<NotificationsScreen mode='entity'/>}/>
                        <Route path={`${AppRoute.ENTITY_NOTIFICATIONS}/:id`} element={<NotificationDetails/>}/>
                    </Route>
                </Routes>
            </Router>
        </UsersContext.Provider>
    )
}

export default App
