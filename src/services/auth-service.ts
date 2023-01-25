import { initializeApp } from 'firebase/app';
import { Auth, getAuth, signInWithEmailAndPassword, RecaptchaVerifier } from "firebase/auth";
import { getEnvVar } from "../helpers/envVars";
import userProps from "../types/UserProps";

export class AuthService {
    private static apiKey?: string
    private static authDomain?: string
    private static databaseURL?: string
    static projectId?: string
    private static storageBucket?: string
    private static messagingSenderId?: string
    private static appId?: string
    private static auth: Auth

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
    }

    public static signIn(user: userProps) {
        if(!user.email){
            throw new Error("Please, provide a valid email")
        }
        return signInWithEmailAndPassword(AuthService.auth, user.email, user.password)
    }
}
