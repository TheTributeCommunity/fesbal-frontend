import { Calendar, CalendarChangeParams, CalendarMonthNavigatorTemplateParams } from "primereact/calendar"
import { useTranslation } from "react-i18next";
import { namespaces } from "../../i18n/i18n.constants";
import { Dropdown, DropdownChangeParams } from "primereact/dropdown";
import 'primereact/resources/primereact.css';
import 'primeicons/primeicons.css';
import { current } from "@reduxjs/toolkit";

interface AppCalendarProps {
    id?: string
    placeholder?: string,
    selectedDate?: Date,
    setDate: (date: string) => void
    yearRange?: string
}

const currentYear = new Date().getFullYear()
const MIN_BIRTH_YEAR = currentYear - 120
const MAX_BIRTH_YEAR = currentYear
const _yearRange = `${MIN_BIRTH_YEAR}:${MAX_BIRTH_YEAR}`
const years = Array.from({length: MAX_BIRTH_YEAR-MIN_BIRTH_YEAR + 1}, (_, i) => i + MIN_BIRTH_YEAR)

const AppCalendar = ({id = 'datePicker', placeholder = 'Fecha de nacimiento', selectedDate, setDate, yearRange}: AppCalendarProps): JSX.Element => {
    const {t: translate} = useTranslation(namespaces.atoms.appCalendar);

    const handleNavigatorChange = (navigatorOptions: CalendarMonthNavigatorTemplateParams) => {
                                        return (dropdownChange: DropdownChangeParams) => navigatorOptions.onChange(dropdownChange.originalEvent, dropdownChange.value)
                                    }

    const handleSetDate = (params: CalendarChangeParams) => setDate(params.value as string)

    const months: {value: number, label: string}[] = (translate('months', {returnObjects: true}) as string[]).map((m, i) => {
        return {value: i, label: m}})

    return (
        <Calendar dateFormat="dd/mm/yy" id="datePicker" value={selectedDate} onChange={handleSetDate}
        className="w-full rounded-md text-secondary-color font-roboto-flex text-base font-normal placeholder-primary-color"
        panelClassName="bg-white p-4 shadow-md rounded-xl text-secondary-color font-roboto-flex text-base font-normal"
        inputClassName="w-full rounded-md px-4 py-5 text-secondary-color font-roboto-flex text-base font-normal placeholder-primary-color"
        monthNavigator yearNavigator yearRange={yearRange ? yearRange : _yearRange}
        monthNavigatorTemplate={(options) => {
            return (<Dropdown className="px-5 my-4 shadow-md rounded-xl text-secondary-color font-roboto-flex text-lg font-normal" panelClassName="border-2 border-solid border-primary-color bg-white shadow-md rounded-xl text-secondary-color font-roboto-flex text-lg font-normal" value={options.value} options={months} onChange={handleNavigatorChange(options)}/>)
        }}
        yearNavigatorTemplate={(options) => {
            return (<Dropdown className="px-5 my-4 shadow-md rounded-xl text-secondary-color font-roboto-flex text-lg font-normal" panelClassName="border-2 border-solid border-primary-color bg-white shadow-md rounded-xl text-secondary-color font-roboto-flex text-lg font-normal" value={options.value} options={years} onChange={handleNavigatorChange(options)}/>)
        }}
        placeholder={`📅  ${placeholder}`}
        />
    )
}

export default AppCalendar;