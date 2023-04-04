import Delivery from '../types/Delivery'
import entityMock from './entity.mock'
import { PickupItemMock } from './pickupItem.mock'
import users from './users.mock'

const DeliveriesMock: Delivery[] = [
    {
        id: 0,
        recipient: users[0],
        entity: entityMock,
        deliveryTimestamp: new Date(2023, 0, 20, 15, 27, 32),
        foodItems: PickupItemMock
    },
    {
        id: 1,
        recipient: users[1],
        entity: entityMock,
        deliveryTimestamp: new Date(2023, 2, 2, 10, 5, 32),
        foodItems: PickupItemMock
    },
    {
        id: 2,
        recipient: users[2],
        entity: entityMock,
        deliveryTimestamp: new Date(2023, 1, 4, 20, 27, 32),
        foodItems: PickupItemMock
    },
    {
        id: 3,
        recipient: users[3],
        entity: entityMock,
        deliveryTimestamp: new Date(2023, 1, 14, 14, 27, 32),
        foodItems: PickupItemMock
    },
]

export default DeliveriesMock