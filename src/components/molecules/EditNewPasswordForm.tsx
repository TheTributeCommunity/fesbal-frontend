import AppNextButton from "../atom/AppNextButton";
import useEditPrevPassword from "../../hooks/useEditPrevPassword";
import EyeShowPasswordIcon from "../icons/EyeShowPasswordIcon";
import useShowPassword from "../../hooks/useShowPassword";
import useEditNewPassword from "../../hooks/useEditNewPassword";

const EditPrevPasswordForm = () => {
    const {password, onChange, hasError, onSubmit, passwordConfirm, onChangeConfirm } = useEditNewPassword()
    const {showPassword, toggleShowPassword} = useShowPassword();
    const {showPassword: showPassword2, toggleShowPassword: toggleShowPassword2} = useShowPassword();

    const buttonDisabled = hasError || password.length === 0 || passwordConfirm.length === 0;

    return (
        <form noValidate onSubmit={onSubmit}
              className="flex flex-col justify-between h-full mt-8 self-center md:w-1/2 lg:w-1/3 w-full">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {password.length > 0 &&
                        <label htmlFor="password" className="text-blue-light">Nueva contraseña</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={onChange}
                            placeholder="Nueva contraseña"
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-[#0F95CE]`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeShowPasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>}
                </div>
                <div className="flex flex-col gap-1.5">
                    {passwordConfirm.length > 0 &&
                        <label htmlFor="password-confirm" className="text-blue-light">Confirmar la nueva contraseña</label>}
                    <div className="relative">
                        <input
                            type={showPassword2 ? "text" : "password"}
                            name="password-confirm"
                            value={passwordConfirm}
                            onChange={onChangeConfirm}
                            placeholder="Confirmar la nueva contraseña"
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 placeholder-[#0F95CE]`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword2}>
                            <EyeShowPasswordIcon/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500 text-sm">Las contraseñas no coinciden</p>}
                </div>
            </div>
            <AppNextButton disabled={buttonDisabled} title="Cambiar contraseña"/>
        </form>
    );
}

export default EditPrevPasswordForm;
