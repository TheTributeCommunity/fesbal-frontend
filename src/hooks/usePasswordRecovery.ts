import {ChangeEvent, FormEvent, useState} from "react";
import {UserEmail} from "../types/UserLoginProps";
import usersMock from "../mocks/users.mock";
import Swal from 'sweetalert2'

const usePasswordRecovery = <T extends UserEmail>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);
    const isFormValid = (email: UserEmail) => {
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
            customClass: { popup: "swal2-border-radius", htmlContainer: "swal2-text-left",
                confirmButton: "swal2-confirm-button", actions:"swal2-actions", title: "swal2-title" },
            width: parent.innerWidth < 768 ? '95%' : '50%',
        })
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}

export default usePasswordRecovery;
