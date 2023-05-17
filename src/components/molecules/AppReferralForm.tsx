import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import { AppRoute } from '../../enums/app-route'
import useUploadReferral from '../../hooks/useUploadReferral'
import { namespaces } from '../../i18n/i18n.constants'
import AppNextButton from '../atom/AppNextButton'
import ReferralFileUploaded from './ReferralFileUploaded'
import ReferralNoFileUploaded from './ReferralNoFileUploaded'
import AppCalendar from '../atom/AppCalendar'
import classNames from 'classnames'
import { Dropdown } from 'primereact/dropdown'
import { SelectItem } from 'primereact/selectitem'
import { Option } from '../../types/Option'
import { useState } from 'react'
import { parseCalendarDate } from '../../helpers/dateHelper'

interface AppReferralFormProps {
  showSubLink: boolean
  onSubmit: (success: boolean) => void
  entities: Option[]
}

const AppReferralForm = ({
  showSubLink,
  onSubmit: onParentSubmit,
  entities
}: AppReferralFormProps) => {
  const { file, setFile, inputRef, handleFileChange, handleClick, onSubmit } =
    useUploadReferral()
  const { t: translate } = useTranslation(namespaces.pages.registerReferral)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedEntity, setSelectedEntity] = useState<string>('')
  
  const validForm = () => {
    return file && selectedEntity && isValidDate()
  }
  const setDate = (dateString: string) => {
    setSelectedDate(parseCalendarDate(dateString))
  }

  const isValidDate = () => selectedDate && selectedDate > new Date()

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (selectedEntity && selectedDate) {
      onSubmit(selectedEntity, selectedDate).then((result) => {
        onParentSubmit(result)
      })
    }
  }

  

  const itemTemplate = (option: SelectItem) => {
    return (
      <div className="w-full">
        <p className="p-2 whitespace-normal text-center">{option.label}</p>
      </div>
    )
  }

  return (
    <div className='flex w-full flex-col justify-between gap-4'>
      <div className='flex flex-col gap-4 py-7'>
        <div>
          <label
            htmlFor='entities'
            className={classNames('text-primary-color font-roboto-flex text-xs font-medium',{
              'invisible': !selectedEntity,
            })}
          >
            Nombre de la entidad
          </label>
          <Dropdown
            id='entities'
            className={classNames('w-full rounded-md font-roboto-flex text-base font-normal placeholder-primary-color bg-white p-4', {
              'text-primary-color': !selectedEntity,
              'text-secondary-color': selectedEntity,
            })}
            value={selectedEntity}
            onChange={(e) => setSelectedEntity(e.value)}
            options={entities}
            placeholder='Nombre de la entidad'
            panelClassName='bg-white rounded-md text-center shadow-table whitespace-pre-wrap'
            itemTemplate={itemTemplate}
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
            placeholder={'Fecha límite de la derivación'}
          />
          {selectedDate && !isValidDate() && (
            <p className='text-warning-color font-label pt-2'>
              La fecha no debe ser anterior a la fecha actual
            </p>
          )}
        </div>
        <div className="pt-4">
          {!file && (
            <ReferralNoFileUploaded
              upload={translate('upload')}
              handleFileChange={handleFileChange}
              handleClick={handleClick}
              inputRef={inputRef}
            />
          )}
          {file && <>
            <label
            htmlFor='datePicker'
            className={'text-primary-color font-roboto-flex text-xs font-medium'}
          >
            Hoja de derivación
          </label>
            <ReferralFileUploaded file={file} setFile={setFile} />
          </>}
        </div>
      </div>
      <div className='flex flex-col gap-4'>
        {showSubLink && !file && (
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
          title={'Enviar solicitud'}
          disabled={!validForm()}
          onClick={handleSubmit}
        />
      </div>
    </div>
  )
}

export default AppReferralForm
