import {ChangeEvent, FormEvent, useState} from "react";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import usersMock from "../mocks/users.mock";

const useEditEmail = <T extends string>(initialState: T) => {
    const [email, setEmail] = useState<T>(initialState);
    const [hasError, setHasError] = useState<boolean>(false);

    const navigate = useNavigate();
    const isAnEmail = (email: string): boolean => {
        const regex = /\S+@\S+\.\S+/;
        return regex.test(email);
    }
    const emailAlreadyExists = (email: string): boolean => {
        return usersMock.some(user => user.email === email);
    }
    const validateEmail = (email: string): boolean => {
        return isAnEmail(email) && !emailAlreadyExists(email);
    }
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(email => e.target.value as T);
        setHasError(false);
    }
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setHasError(!validateEmail(email));
        if (validateEmail(email)) Swal.fire({
            title: '¿Estás seguro de que quieres cambiar tu email?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#EB5757',
            cancelButtonColor: '#3085d6',
            iconColor: '#EB5757',
            confirmButtonText: 'Sí, cambiar email',
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
                    title: 'Email cambiado correctamente',
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
        email
    }
}
export default useEditEmail;
