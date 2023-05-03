import PickupService from '../services/PickupService'

export const usePickUpActions = () => {
  const startPickUp = (recipientId: string) => {
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
