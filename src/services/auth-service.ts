import { initializeApp } from 'firebase/app'
import { Auth, ConfirmationResult, getAuth, signInWithEmailAndPassword, signInWithPhoneNumber, RecaptchaVerifier, onAuthStateChanged, User } from 'firebase/auth'
import { getEnvVar } from '../helpers/envVars'
import { AuthUser } from '../models/auth-user'

export class AuthService {
    private static auth: Auth
    public static SPAIN_PHONE_PREFIX = '+34'
    private static confirmationResult: ConfirmationResult
    public static currentUser: AuthUser | null

    public static initialize(): void {
        initializeApp({
            apiKey: getEnvVar('FIREBASE_API_KEY'),
            authDomain: getEnvVar('FIREBASE_AUTH_DOMAIN'),
            databaseURL: getEnvVar('FIREBASE_DATABASE_URL'),
            projectId: getEnvVar('FIREBASE_PROJECT_ID'),
            storageBucket: getEnvVar('FIREBASE_STORAGE_BUCKET'),
            messagingSenderId: getEnvVar('FIREBASE_MESSAGING_SENDER_ID'),
            appId: getEnvVar('FIREBASE_APP_ID'),
        })
        this.setUpAuth()
    }

    private static setUpAuth() {
        this.auth = getAuth()
        this.auth.useDeviceLanguage()
    }

    public static signInWithPhoneNumber(submitButtonId: string, phoneWithoutPrefix: string) {
        const recaptchaVerifier = this.setUpRecaptcha(submitButtonId)
        const phone = this.addPhonePrefix(phoneWithoutPrefix)

        return signInWithPhoneNumber(this.auth, phone, recaptchaVerifier)
            .then((confirmationResult) => { this.confirmationResult = confirmationResult })
    }

    private static setUpRecaptcha(submitButtonId: string) {
        const INVISIBLE_RECAPTCHA_CONFIG = { 'size': 'invisible' }
        const recaptchaVerifier = new RecaptchaVerifier(submitButtonId, INVISIBLE_RECAPTCHA_CONFIG, this.auth)

        recaptchaVerifier.render()

        return recaptchaVerifier
    }

    public static confirmPhoneCode(code: string) {
        return this.confirmationResult.confirm(code)
    }

    public static signIn(email: string, password: string) {
        return signInWithEmailAndPassword(this.auth, email, password)
    }

    public static addPhonePrefix(phone: string) {
        return `${this.SPAIN_PHONE_PREFIX}${phone}`
    }
}
