import { useState } from "react";

const useRegisterBirthDate = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());

    const isValidBirthDate = () => selectedDate ? selectedDate < new Date() : false

    const getFormattedBirthDate = (): string => {
        if (selectedDate) {
            const day = selectedDate.getDate()
            const month = selectedDate.getMonth()
            const year = selectedDate.getFullYear()
            const dayPad = day < 10 ? '0' : ''
            const monthPad = month < 10 ? '0' : ''
            return `${dayPad}${day}/${monthPad}${month}/${year}`
        } else return ''
    }

    const setDate = (dateString: string) => { setSelectedDate(new Date(dateString)) }

    return {
        selectedDate,
        setDate,
        isValidBirthDate,
        getFormattedBirthDate
    }
}

export default useRegisterBirthDate;
