import { useTranslation } from 'react-i18next'
import Spinner from '../components/atom/Spinner'
import LogoFesbalIcon from '../components/icons/LogoFesbalIcon'
import AppWrapper from '../components/molecules/AppWrapper'
import { namespaces } from '../i18n/i18n.constants'
import usersMock from '../mocks/users.mock'
import { useRecipient } from '../hooks/useRecipient'

const RecipientLandingScreen = (): JSX.Element => {
  const { t: translate } = useTranslation(namespaces.pages.recipientLanding)
  const { data, loading } = useRecipient()
  
  return (
    <AppWrapper
      title='BALPA'
      titleClassName='text-2xl leading-7 font-bold font-sans self-center text-dark-blue'
      showBurger
      showBackButton={false}
      bgOpaque={false}
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className='flex flex-col gap-8 justify-start items-center w-full '>
          <div className='py-12'>
            <LogoFesbalIcon />
          </div>
          <div className='flex flex-col items-center gap-11 font-roboto-flex'>
            <div className='flex flex-col gap-4 items-center'>
              <span className='font-bold text-secondary-color text-3xl'>{`${data.RecipientReadModel.firstName} ${data.RecipientReadModel.lastName}`}</span>
              <span className='text-dark-blue text-2xl leading-7 font-medium'>
                {data.RecipientReadModel.identityDocumentNumber}
              </span>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <span className='text-dark-blue text-base font-light'>
                {translate('nextDelivery')}
              </span>
              <span className='text-base leading-5 font-normal'>
                {usersMock[0].nextPickup?.toLocaleDateString()}
              </span>
            </div>
            <div className='flex flex-col gap-3 items-center'>
              <span className='text-dark-blue text-base font-light'>
                {translate('derivationLimit')}
              </span>
              <span className='text-base leading-5 font-normal'>
                {usersMock[0].derivationLimit?.toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      )}
    </AppWrapper>
  )
}

export default RecipientLandingScreen