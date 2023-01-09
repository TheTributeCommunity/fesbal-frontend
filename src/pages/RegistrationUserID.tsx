import AppBackButton from "../components/atom/AppBackButton";
import UserIDForm from "../components/molecules/UserIDForm";

const RegistrationUserID = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/login"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Documento de identidad
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero
                        sit amet.</p>
                </div>
            </div>
            <UserIDForm/>
        </div>
    );
}

export default RegistrationUserID;
