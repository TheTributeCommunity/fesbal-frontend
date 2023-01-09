import AppBackButton from "../components/atom/AppBackButton";
import EditNewPasswordForm from "../components/molecules/EditNewPasswordForm";

const EditNewPassword = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/profile/edit-prev-password"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Editar Contraseña
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero sit amet.
                    </p>
                </div>
            </div>
            <EditNewPasswordForm/>
        </div>
    );
}

export default EditNewPassword;
