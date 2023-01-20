import { HistoryMock } from '../mocks/history.mock';
import { Pickup } from '../types/Pickup';

class PickupService {
  static async getPickupHistory(): Promise<Pickup[]> {
    return HistoryMock;
  }
}

export default PickupService;
