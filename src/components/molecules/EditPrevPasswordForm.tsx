import AppNextButton from "../atom/AppNextButton";
import useEditPrevPassword from "../../hooks/useEditPrevPassword";
import useShowPassword from "../../hooks/useShowPassword";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEyeSlash} from "@fortawesome/free-regular-svg-icons";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit} = useEditPrevPassword();
    const {showPassword, toggleShowPassword} = useShowPassword();

    const buttonDisabled = hasError || password.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {password.length > 0 &&
                        <label htmlFor="password" className="text-primary-color">Contraseña actual</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Contraseña actual"
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-[#0F95CE]`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <FontAwesomeIcon icon={faEyeSlash} className="text-primary-color"/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">El password no es válido</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title="Continuar"/>
        </form>
    );
}

export default EditPrevPasswordForm;
