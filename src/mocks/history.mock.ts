import { Pickup } from '../types/Pickup'
import { PickupItemMock } from './pickupItem.mock'

export const HistoryMock: Pickup[] = [
    {
        id: 1,
        date: '2022-12-23T10:30:00.000Z',
        entityName: 'Entity 1',
        title: 'History 1',
        pickupItems: PickupItemMock,
    },
    {
        id: 2,
        date: '2022-12-24T10:30:00.000Z',
        entityName: 'Entity 2',
        title: 'History 2',
        pickupItems: PickupItemMock,
    },
    {
        id: 3,
        date: '2022-12-25T10:30:00.000Z',
        entityName: 'Entity 3',
        title: 'History 3',
        pickupItems: PickupItemMock,
    },
    {
        id: 4,
        date: '2022-12-26T10:30:00.000Z',
        entityName: 'Entity 4',
        title: 'History 4',
        pickupItems: PickupItemMock,
    },
]
