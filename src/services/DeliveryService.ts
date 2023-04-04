import DeliveriesMock from '../mocks/deliveries.mock'
import Delivery from '../types/Delivery'

class DeliveryService {
    static async getDeliveryHistory(): Promise<Delivery[]> {
        return DeliveriesMock
    }

    static async getDeliveryDetails(id: number): Promise<Delivery|null> {
        return DeliveriesMock.find(delivery => delivery.id === id) || null
    }
}

export default DeliveryService
