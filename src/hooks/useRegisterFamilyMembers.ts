import React from "react";
import {useNavigate} from "react-router-dom";

const useRegisterFamilyMembers = () => {
    const [familyMembers, setFamilyMembers] = React.useState([]);
    const navigate = useNavigate();

    const disableNext = familyMembers.length === 0;
    const handleNextWithFamilyMembers = () => {
        if (!disableNext) {
            navigate("/register/referral");
        }
    };


    return {
        familyMembers,
        setFamilyMembers,
        handleNextWithFamilyMembers,
        disableNext
    };
}

export default useRegisterFamilyMembers;
