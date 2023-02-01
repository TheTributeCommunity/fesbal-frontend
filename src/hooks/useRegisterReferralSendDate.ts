import { useState } from "react";

const useRegisterReferralSendDate = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    const isValidFutureDate = () => selectedDate ? selectedDate > new Date() : false

    const getFormattedDate = (): string => {
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
        isValidFutureDate,
        getFormattedDate
    }
}

export default useRegisterReferralSendDate;
