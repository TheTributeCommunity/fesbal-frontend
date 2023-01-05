import AppBackButton from "../components/atom/AppBackButton";
import LoginForm from "../components/atom/LoginForm";

const LoginProcess = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8">
                <AppBackButton/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Inicia sesión
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero
                        sit amet.</p>
                </div>
            </div>
            <LoginForm/>
        </div>
    );
};

export default LoginProcess;
