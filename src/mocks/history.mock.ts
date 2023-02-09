import { Pickup } from '../types/Pickup';
import { PickupItemMock } from './pickupItem.mock';

export const HistoryMock: Pickup[] = [
  {
    id: 1,
    date: '2022-12-23T10:30:00.000Z',
    title: 'History 1',
    description: 'History 1 description',
    pickupItems: PickupItemMock,
  },
  {
    id: 2,
    date: '2022-12-24T10:30:00.000Z',
    title: 'History 2',
    description: 'History 2 description',
    pickupItems: PickupItemMock,
  },
  {
    id: 3,
    date: '2022-12-25T10:30:00.000Z',
    title: 'History 3',
    description: 'History 3 description',
    pickupItems: PickupItemMock,
  },
  {
    id: 4,
    date: '2022-12-26T10:30:00.000Z',
    title: 'History 4',
    description: 'History 4 description',
    pickupItems: PickupItemMock,
  },
];
