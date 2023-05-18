import moment from 'moment'

export const defaultDatFormat = 'DD/MM/YYYY'

export const getDiffInYears = (date1: Date, date2: Date): number => {
    return moment(date2).diff(moment(date1), 'years')
}

export const getAge = (birthDate: Date): number => getDiffInYears(birthDate, new Date())

export const formatDate = (date: Date): string => moment(date).format(defaultDatFormat)

export const parseCalendarDate = (date: string): Date => moment(date, defaultDatFormat).toDate()