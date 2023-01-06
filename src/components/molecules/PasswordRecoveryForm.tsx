import {NavLink} from "react-router-dom";
import usePasswordRecovery from "../../hooks/usePasswordRecovery";
import AppNextButton from "../atom/AppNextButton";

const PasswordRecoveryForm = () => {
    const {email, onChange, hasError, onSubmit} = usePasswordRecovery("");

    const buttonDisabled = email.length < 6 || hasError;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {email.length > 0 &&
                        <label htmlFor="email" className="text-blue-light">Email</label>}
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        placeholder="Email"
                        className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-[#0F95CE]`}
                    />
                    {hasError &&
                        <p className="text-red-500 text-sm">El email no es válido</p>}
                    <NavLink to="/password-recovery"
                             className="text-blue-dark font-bold text-sm self-end underline">
                        No recuerdo mi email
                    </NavLink>
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title="Enviar Email"/>
        </form>
    );
}

export default PasswordRecoveryForm;
