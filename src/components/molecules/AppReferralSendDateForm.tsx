import { useTranslation } from 'react-i18next'
import { namespaces } from '../../i18n/i18n.constants'
import AppNextButton from '../atom/AppNextButton'
import AppCalendar from '../atom/AppCalendar'
import { FormEvent } from 'react'
import classNames from 'classnames'
import useRegisterReferralSendDate from '../../hooks/useRegisterReferralSendDate'

interface Props {
    onSubmit: () => void;
}

export default ({onSubmit: parentOnSubmit}:Props) => {
    const { selectedDate, setDate, isValidFutureDate } = useRegisterReferralSendDate()
    const { t: translate } = useTranslation(
        namespaces.pages.registerReferralSendDate
    )

    const validForm = (): boolean => {
        return isValidFutureDate()
    }

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validForm()) {
            parentOnSubmit()
        }
    }

    const minDate = new Date()
    minDate.setDate(minDate.getDate() + 1)


    return (
        <form
            noValidate
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-4"
        >
            <div className="flex flex-col gap-4 mt-6 mb-4">
                <div className="">
                    <label
                        htmlFor="datePicker"
                        className={classNames({
                            'text-primary-color font-roboto-flex text-xs font-medium':
                                selectedDate,
                            invisible: !selectedDate,
                        })}
                    >
                        {translate('sendDate')}
                    </label>
                    <AppCalendar
                        id="datePicker"
                        selectedDate={selectedDate || undefined}
                        minDate={minDate}
                        setDate={setDate}
                        placeholder={translate('sendDate')}
                    />
                </div>
            </div>
            <AppNextButton disabled={!validForm()} title={translate('next')} />
        </form>
    )
}
