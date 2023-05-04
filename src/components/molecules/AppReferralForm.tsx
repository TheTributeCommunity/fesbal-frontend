import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../enums/app-route'
import useUploadReferral from '../../hooks/useUploadReferral'
import { namespaces } from '../../i18n/i18n.constants'
import AppNextButton from '../atom/AppNextButton'
import Spinner from '../atom/Spinner'
import ReferralFileUploaded from './ReferralFileUploaded'
import ReferralNoFileUploaded from './ReferralNoFileUploaded'
import AppFormInput from '../atom/AppFormInput'
import AppCalendar from '../atom/AppCalendar'
import { backendDateToDate } from '../../helpers/dateHelper'
import classNames from 'classnames'
import { Dropdown } from 'primereact/dropdown'

interface AppReferralFormProps {
  showSubLink: boolean
  onSubmit: (success: boolean) => void
}

const AppReferralForm = ({
  showSubLink,
  onSubmit: onParentSubmit,
}: AppReferralFormProps) => {
  const { file, setFile, inputRef, handleFileChange, handleClick, onSubmit } =
    useUploadReferral()
  const [loading, setLoading] = useState(false)

  const [selectedDate, setSelectedDate] = useState<Date>(new Date())
  const [selectedEntity, setSelectedEntity] = useState<string>('')
  const validForm = () => true
  const setDate = (dateString: string) => {
    setSelectedDate(backendDateToDate(dateString))
  }

  const { t: translate } = useTranslation(namespaces.pages.registerReferral)

  const entities: { value: number; label: string }[] = [
    { value: 1, label: 'Entidad 1' },
    { value: 2, label: 'Entidad 2' },
    { value: 3, label: 'Entidad 3' },
  ]

  const navigate = useNavigate()

  const handleSubmit = () => {
    setLoading(true)
    onSubmit().then((result) => {
      setLoading(false)
      onParentSubmit(result)
    })
  }

  if (loading) return <Spinner />

  return (
    <div className='flex w-full flex-col justify-between gap-10 mt-8'>
      <div className='flex flex-col gap-4 px-6 py-7'>
        <div>
          <label
            htmlFor='entities'
            className='text-primary-color font-roboto-flex text-xs font-medium'
          >
            Nombre de la entidad
          </label>
          <Dropdown
            className='w-full rounded-md text-secondary-color font-roboto-flex text-base font-normal placeholder-primary-color'
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.value)}
            options={entities}
            placeholder='Nombre de la entidad'
            panelClassName='bg-white'
          />
        </div>
        <div>
          <label
            htmlFor='datePicker'
            className={classNames({
              'text-primary-color font-roboto-flex text-xs font-medium':
                selectedDate,
              invisible: !selectedDate,
            })}
          >
            Fecha límite de la derivación
          </label>
          <AppCalendar
            id='datePicker'
            selectedDate={selectedDate}
            setDate={setDate}
            placeholder={translate('inputBirthDate') ?? undefined}
          />
          {!validForm() && (
            <p className='text-warning-color font-label pt-2'>
              La fecha no debe ser anterior a la fecha actual
            </p>
          )}
        </div>
        <div>
          {!file && (
            <ReferralNoFileUploaded
              upload={translate('upload')}
              handleFileChange={handleFileChange}
              handleClick={handleClick}
              inputRef={inputRef}
            />
          )}
          {file && <ReferralFileUploaded file={file} setFile={setFile} />}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {showSubLink && (
          <a
            className='text-center underline font-small-link'
            onClick={() => {
              navigate(AppRoute.REGISTER_REFERRAL_SHEET_SEND_DATE)
            }}
          >
            {translate('link')}
          </a>
        )}
        <AppNextButton
          title={translate('next')}
          disabled={!file}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default AppReferralForm
