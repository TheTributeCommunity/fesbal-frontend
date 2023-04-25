import moment from 'moment'
import { useState } from 'react'
import { backendDateToDate } from '../helpers/dateHelper'

const useRegisterBirthDate = () => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date())

    const isValidBirthDate = (allowToday = true) => {
        if (selectedDate) {
            return allowToday ?
                selectedDate <= new Date()
                : selectedDate < new Date(new Date().setHours(0, 0, 0, 0))
        }
        else return false
    }

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

    const setDate = (dateString: string) => { setSelectedDate(backendDateToDate(dateString)) }

    return {
        selectedDate,
        setDate,
        isValidBirthDate,
        getFormattedBirthDate
    }
}

export default useRegisterBirthDate
