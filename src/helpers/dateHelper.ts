import moment from 'moment'

export const getDiffInYears = (date1: Date, date2: Date): number => {
    return moment(date2).diff(moment(date1), 'years')
}

export const getAge = (birthDate: Date): number => getDiffInYears(birthDate, new Date())

export const backendDateToDate = (dateString: string) => new Date(moment(dateString, 'DD/M/YYYY').toDate())