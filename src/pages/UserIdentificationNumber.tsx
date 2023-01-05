import AppBackButton from "../components/atom/AppBackButton";
import IdentificationForm from "../components/molecules/IdentificationForm";

const UserIdentificationNumber = () => {

    return (
        <div className="h-screen flex flex-col page-bg text-blue-dark p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Documento de Identidad
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero
                        sit amet.
                    </p>
                </div>
            </div>
            <IdentificationForm/>
        </div>
    )
}

export default UserIdentificationNumber
