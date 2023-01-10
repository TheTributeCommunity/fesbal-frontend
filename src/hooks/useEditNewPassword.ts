import {ChangeEvent, FormEvent, useState} from "react";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

const useEditNewPassword = () => {
    const [password, setPassword] = useState<string>('');
    const [passwordConfirm, setPasswordConfirm] = useState<string>('');
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();

    const arePasswordsEqual = password === passwordConfirm;
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
        setHasError(false);
    }
    const onChangeConfirm = (e: ChangeEvent<HTMLInputElement>) => {
        setPasswordConfirm(e.target.value);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!arePasswordsEqual);
        if (arePasswordsEqual) Swal.fire({
            title: '¿Estás seguro de que quieres cambiar tu contraseña?',
            icon: 'warning',
            showCancelButton: true,
            iconColor: '#EB5757',
            confirmButtonText: 'Sí, cambiar contraseña',
            buttonsStyling: false,
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "rounded-md",
                actions: "flex gap-2 w-full",
                title: "text-2xl font-bold",
                confirmButton: "bg-[#EB5757] hover:bg-[#D14A4A] text-white rounded-xl font-medium w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#EB5757] h-20",
                cancelButton: "bg-[#3085d6] hover:bg-[#2D7DB5] text-white rounded-xl font-medium w-full" +
                    " lg:w-2/5 focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#3085d6] h-20",
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',

        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Contraseña cambiada',
                    icon: 'success',
                    iconColor: '#3085d6',
                    position: 'bottom',
                    padding: '1rem',
                    buttonsStyling: false,
                    confirmButtonText: 'Ir a mi perfil',
                    customClass: {
                        popup: "rounded-md",
                        actions: "w-full",
                        title: "text-2xl font-bold",
                        confirmButton: "bg-[#3085d6] hover:bg-[#2D7DB5] text-white rounded-xl font-medium w-full" +
                            " focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-[#3085d6] h-20",
                    },
                    width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
                }).then(() => navigate('/profile'));
            }
        })
    }

    return {
        onChange,
        hasError,
        onSubmit,
        password,
        onChangeConfirm,
        passwordConfirm
    }
}
export default useEditNewPassword;
