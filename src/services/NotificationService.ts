import { BoosterClient } from './booster-service'
import { gql } from '@apollo/client'

export class NotificationService {
    public static async setNotificationRead(notificationId: string): Promise<boolean> {
        const result = await BoosterClient.query<{ ReadNotification: boolean }>({
            query: SET_NOTIFICATION_TO_READ,
            variables: { id: notificationId },
        })
        return result.data.ReadNotification
    }
}

const SET_NOTIFICATION_TO_READ = gql`
mutation ReadNotification ($id: ID!) {
    ReadNotification(input: { notificationId: $id})
  }
  
`