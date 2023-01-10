import AppBackButton from "../components/atom/AppBackButton";
import PasswordRecoveryForm from "../components/molecules/PasswordRecoveryForm";

export const PasswordRecovery = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Recuperar contraseña
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero sit amet.
                    </p>
                </div>
            </div>
            <PasswordRecoveryForm/>
        </div>
    );
};

export default PasswordRecovery;
