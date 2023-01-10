import AppBackButton from "../components/atom/AppBackButton";
import EditEmailForm from "../components/molecules/EditEmailForm";

const EditEmail = () => {
    return (
        <div className="h-screen flex flex-col page-bg text-secondary-color p-8 justify-between">
            <div className="flex flex-col gap-8 self-center md:w-1/2 lg:w-1/3">
                <AppBackButton goTo="/profile"/>
                <div>
                    <h1 className="text-1xl font-bold mb-4">
                        Editar Email
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus, hendrerit eu
                        libero sit amet.
                    </p>
                </div>
            </div>
            <EditEmailForm/>
        </div>
    );
}

export default EditEmail;
