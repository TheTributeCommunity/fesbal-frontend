import {useState} from "react";

const useShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return { showPassword, toggleShowPassword };
}

export default useShowPassword;
