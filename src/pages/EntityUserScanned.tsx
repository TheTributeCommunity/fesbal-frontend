import AppWrapper from '../components/molecules/AppWrapper'
import { useLocation } from 'react-router-dom'
import AppNextButton from '../components/atom/AppNextButton'
import AgeGroupItem from '../components/atom/AgeGroupItem'
import { useTranslation } from 'react-i18next'
import { namespaces } from '../i18n/i18n.constants'
import getFamilyUnitAges from '../helpers/getFamilyUnitAges'
import { useNavigate } from 'react-router'
import { useEffect, useState } from 'react'
import { Recipient } from '../models/recipient-user'
import FamilyUnitAges from '../types/FamilyUnitAges'
import { usePickUpActions } from '../hooks/usePickUpActions'
import useRecipientAndRelatives from '../hooks/useRecipientAndRelatives'
import BlankStage from '../components/atom/BlankStage'
import Spinner from '../components/atom/Spinner'

const EntityUserScanned = () => {
  const { state } = useLocation()
  const [pickUpId, setPickUpId] = useState<string>('')
  const { user, familyMembers, loading } = useRecipientAndRelatives(state.recipient.id)
  const [familyUnitAges, setFamilyUnitAges] = useState<FamilyUnitAges>()
  const { t: translate } = useTranslation(namespaces.pages.entityUserScanned)
  const { submitPickUp } = usePickUpActions();

  useEffect(() => {
    !loading && user && setFamilyUnitAges(getFamilyUnitAges(user, familyMembers))
  }, [loading])

  const handleSubmitDelivery = () => {
    submitPickUp(pickUpId)
  }

  if (loading) return (
    <BlankStage>
      <Spinner />
    </BlankStage>
  )

  return (
    <AppWrapper
      title={translate('title')}
      showBurger={true}
      containerClassName='px-0'
      topbarClassName='bg-white'
    >
      <div className='h-full'>
        <div className='flex flex-col bg-white px-8 py-4 gap-2'>
          <h1 className='font-bold text-2xl text-secondary-color'>
            {user?.firstName ?? ''} {user?.lastName ?? ''}
          </h1>
          <h2 className='font-medium text-2xl text-primary-color'>
            {user?.identityDocumentNumber ?? ''}
          </h2>
        </div>
        <div className='flex flex-col bg-ghost-white px-8 py-4 gap-2'>
          <h3 className='font-label text-primary-color'>
            {translate('familyUnitAges')}
          </h3>
          <ul className='flex flex-wrap gap-x-6 gap-y-2'>
            <AgeGroupItem
              description={translate('under3')}
              count={familyUnitAges?.under3 ?? 0}
            />
            <AgeGroupItem
              description={translate('between3and15')}
              count={familyUnitAges?.between3and15 ?? 0}
            />
            <AgeGroupItem
              description={translate('over16')}
              count={familyUnitAges?.over15 ?? 0}
            />
          </ul>
        </div>
        <div className='flex flex-col px-8 py-4 gap-2'>
          <h3 className='font-label text-primary-color'>
            {translate('lastPickup')}
          </h3>
          <p className='text-secondary-color font-input'>
            {new Date().toLocaleDateString()}
          </p>
        </div>
        <div className='flex flex-col px-8 py-4 gap-6'></div>
      </div>
      <div className='flex px-8 py-4 mt-20 bg-white rounded-t-2xl drop-shadow z-0'>
        <AppNextButton title={translate('sendFoodList')} onClick={handleSubmitDelivery}/>
      </div>
    </AppWrapper>
  )
}

export default EntityUserScanned
