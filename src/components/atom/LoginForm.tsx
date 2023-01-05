import useLoginForm from "../../hooks/useLoginForm";
import EyeShowPassword from "../icons/EyeShowPassword";

const LoginForm = () => {
    const {user, onChange, hasError, onSubmit, toggleShowPassword, showPassword} = useLoginForm(
        {
            id: "",
            password: ""
        });

    return (
        <form noValidate onSubmit={onSubmit} className="flex flex-col justify-between h-full mt-8">
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-1.5">
                    {user.id.length > 0 &&
                        <label htmlFor="id" className="text-blue-light">Documento de Identidad</label>}
                    <input
                        type="text"
                        name="id"
                        value={user.id}
                        onChange={onChange}
                        placeholder="Documento de identidad"
                        className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5 mb-0`}
                    />
                </div>
                <div className="flex flex-col gap-1.5">
                    {user.password.length > 0 &&
                        <label htmlFor="password" className="text-blue-light">Contraseña</label>}
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={user.password}
                            onChange={onChange}
                            placeholder="Contraseña"
                            className={`${hasError ? 'text-red-500' : ''} rounded-md w-full px-4 py-5`}
                        />
                        <div className="absolute right-4 top-6 cursor-pointer" onClick={toggleShowPassword}>
                            <EyeShowPassword/>
                        </div>
                    </div>
                    {hasError &&
                        <p className="text-red-500">El Documento de identidad y/o la contraseña no coinciden. Inténtalo
                            de nuevo.</p>}
                    <a href="#" className="text-blue-dark font-bold text-sm self-end underline">¿Olvidaste tu
                        contraseña?</a>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <a href="#" className="text-blue-dark font-bold text-sm self-center underline text-center px-6">¿Has
                    realizado una solicitud de registro y aún no has recibido tus credenciales?</a>
                <button type="submit" className="rounded-2xl flex items-center justify-center py-5 text-white font-bold bg-blue-light
                disabled:bg-white disabled:text-[#0F95CE] border border-[#0F95CE] disabled:opacity-50 w-full"
                        disabled={hasError || user.id.length === 0 || user.password.length === 0}>
                    Iniciar sesión
                </button>
            </div>
        </form>
    );
}

export default LoginForm;
