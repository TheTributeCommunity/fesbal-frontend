import {ChangeEvent, FormEvent, useState} from "react";
import usersMock from "../mocks/users.mock";
import Swal from 'sweetalert2'
import {useNavigate} from "react-router-dom";

const usePasswordRecovery = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const isFormValid = (email: string): boolean => {
        return usersMock.some((user) => user.email === email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(email => e.target.value as T);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!isFormValid(email));
        if (isFormValid(email)) Swal.fire({
            title: 'Email enviado',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacus purus.',

            icon: 'success',
            confirmButtonText: 'Ir a Iniciar Sesión',
            color: '#002E5D',
            iconColor: '#0F95CE',
            confirmButtonColor: '#0F95CE',
            position: 'bottom',
            padding: '1rem',
            customClass: {
                popup: "swal2-border-radius",
                htmlContainer: "swal2-text-left",
                confirmButton: "swal2-confirm-button",
                actions:"swal2-actions",
                title: "swal2-title"
            },
            width: parent.innerWidth < 768 ? '95%' : parent.innerWidth < 1024 ? '48%' : '35%',
        }).then(() => navigate('/login'));
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default usePasswordRecovery;
