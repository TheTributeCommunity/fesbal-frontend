import { initializeApp } from 'firebase/app';
import { Auth, ConfirmationResult, getAuth, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, onAuthStateChanged, User } from "firebase/auth";
import { getEnvVar } from "../helpers/envVars";
import userProps from "../types/UserProps";
import {AuthUser} from "../models/AuthUser";

export class AuthService {
    private static apiKey?: string
    private static authDomain?: string
    private static databaseURL?: string
    static projectId?: string
    private static storageBucket?: string
    private static messagingSenderId?: string
    private static appId?: string
    private static auth: Auth
    private static SPAIN_PHONE_PREFIX = "+34"
    private static confirmationResult: ConfirmationResult
    private static currentUser: AuthUser | null

    public static getCurrentUser() {
        return AuthService.currentUser;
    }

    public static initialize(): void {
        AuthService.apiKey = getEnvVar('FIREBASE_API_KEY')
        AuthService.authDomain = getEnvVar('FIREBASE_AUTH_DOMAIN')
        AuthService.databaseURL = getEnvVar('FIREBASE_DATABASE_URL')
        AuthService.projectId = getEnvVar('FIREBASE_PROJECT_ID')
        AuthService.storageBucket = getEnvVar('FIREBASE_STORAGE_BUCKET')
        AuthService.messagingSenderId = getEnvVar('FIREBASE_MESSAGING_SENDER_ID')
        AuthService.appId = getEnvVar('FIREBASE_APP_ID')

        initializeApp({
            apiKey: AuthService.apiKey,
            authDomain: AuthService.authDomain,
            databaseURL: AuthService.databaseURL,
            projectId: AuthService.projectId,
            storageBucket: AuthService.storageBucket,
            messagingSenderId: AuthService.messagingSenderId,
            appId: AuthService.appId,
        })

        this.setUpAuth();
    }

    private static setUpAuth() {
        AuthService.auth = getAuth();

        AuthService.auth.useDeviceLanguage();

        onAuthStateChanged(AuthService.auth, (user) => {
            AuthService.currentUser = user ? this.firebaseUserToAuthUser(user) : null;
        });
    }

    private static firebaseUserToAuthUser(user: User) {
        return {
            phone: user.phoneNumber,
            email: user.email ,
            emailVerified: user.emailVerified,
            getToken(): Promise<string> | undefined { return AuthService.auth.currentUser?.getIdToken()}
        }
    }

    public static signInWithPhoneNumber(submitButtonId: string, phoneWithoutPrefix: string) {
        const recaptchaVerifier = AuthService.setUpRecaptcha(submitButtonId);
        const phone = `${AuthService.SPAIN_PHONE_PREFIX} ${phoneWithoutPrefix}`;

        return signInWithPhoneNumber(AuthService.auth, phone, recaptchaVerifier)
            .then((confirmationResult) => {AuthService.confirmationResult = confirmationResult})
    }

    private static setUpRecaptcha(submitButtonId: string) {
        const INVISIBLE_RECAPTCHA_CONFIG = {'size': 'invisible'};
        const recaptchaVerifier = new RecaptchaVerifier(submitButtonId,INVISIBLE_RECAPTCHA_CONFIG, AuthService.auth);

        recaptchaVerifier.render();

        return recaptchaVerifier;
    }

    public static confirmPhoneCode(code: string) {
        return AuthService.confirmationResult.confirm(code)
    }

    public static signIn(email: string , password: string) {
        return signInWithEmailAndPassword(AuthService.auth, email, password)
    }
}
