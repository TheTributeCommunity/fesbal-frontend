import { useMutation } from '@apollo/client'
import PickupService, { START_PICKUP } from '../services/PickupService'

export const usePickUpActions = () => {
  const startPickUp = (recipientId: string) => {
    
    const [startPickup] = useMutation(START_PICKUP, {
      variables: { recipientId },
    })

    return PickupService.startPickup(recipientId)
      .then((pickUpId) => {
        return pickUpId
      })
      .catch((err) => {
        console.log(err)
        return undefined
      })
  }

  const submitPickUp = (pickUpId: string) => {
    PickupService.submitPickUp(pickUpId)
  }

  return {
    startPickUp,
    submitPickUp,
  }
}
