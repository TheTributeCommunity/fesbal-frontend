import moment from 'moment'

export const getDiffInYears = (date1: Date, date2: Date): number => {
    return moment(date2).diff(moment(date1), 'years')
}