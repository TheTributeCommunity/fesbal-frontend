import { HistoryMock } from '../mocks/history.mock'
import { Pickup } from '../types/Pickup'

class PickupService {
    static async getPickupHistory(): Promise<Pickup[]> {
        return HistoryMock
    }

    static async getPickupDetails(id: number): Promise<Pickup|null> {
        return HistoryMock.find((item) => item.id === id) || null
    }
}

export default PickupService
