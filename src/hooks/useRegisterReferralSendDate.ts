import { useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { UsersContext } from '../contexts/usersContext'
import { RegistrationRequest } from '../models/registration-request'
import { RegistrationRequestService } from '../services/registration-request-service'
import { useUserStore } from '../store/logged-user'

const useRegisterReferralSendDate = () => {
  const [selectedDate, setSelectedDate] = useState<Date>()
  const userId = useUserStore((state) => state.userId)

  const isValidFutureDate = () =>
    selectedDate ? selectedDate > new Date() : false

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

  const setDate = (dateString: string) => {
    setSelectedDate(new Date(dateString))
  }

  const submitRegistrationRequest = async (): Promise<boolean> => {
    if (userId) {
      const payload: RegistrationRequest = {
        registrationRequestId: uuidv4(),
        socialServiceAppointment: selectedDate?.getTime(),
      }
      const result = await RegistrationRequestService.send(payload)
        .then((result) => result)
        .catch((e) => {
          console.log(e)
          return false
        })
      return result
    } else return false
  }

  return {
    selectedDate,
    setDate,
    isValidFutureDate,
    getFormattedDate,
    submitRegistrationRequest,
  }
}

export default useRegisterReferralSendDate
