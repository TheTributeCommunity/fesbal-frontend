import {ChangeEvent, FormEvent, useState} from "react";
import {useNavigate} from 'react-router-dom';
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
            iconColor: '#EB5757',
            confirmButtonText: 'Sí, cambiar email',
            position: 'bottom',
            padding: '1rem',
            buttonsStyling: false,
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
                    title: 'Email cambiado correctamente',
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
                }).then(() => navigate('/profile'))
            }
        })
    }

    return {
        onChange,
        hasError,
        onSubmit,
        email
    }
}
export default useEditEmail;
