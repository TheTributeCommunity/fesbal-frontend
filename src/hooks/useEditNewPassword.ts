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
            confirmButtonColor: '#EB5757',
            cancelButtonColor: '#3085d6',
            iconColor: '#EB5757',
            confirmButtonText: 'Sí, cambiar contraseña',
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "swal2-border-radius",
                actions: "md:w-1/2 lg:w-1/3",
                title: "swal2-title",
                confirmButton: "swal2-confirm-button--half",
                cancelButton: "swal2-cancel-button--half",
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
                    confirmButtonColor: '#3085d6',
                    customClass: {
                        popup: "swal2-border-radius",
                        title: "swal2-title",
                        confirmButton: "swal2-confirm-button",
                    },
                    width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
                })
            }
        }).then(() => navigate('/profile'))
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
