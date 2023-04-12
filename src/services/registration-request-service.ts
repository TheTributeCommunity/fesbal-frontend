import { BoosterClient } from './booster-service'
import { RegistrationRequest } from '../models/registration-request'
import { gql } from '@apollo/client'

export class RegistrationRequestService {
    static async send(registrationRequest: RegistrationRequest): Promise<boolean> {
        const response = await BoosterClient.mutate<{ SendRegistrationRequest: boolean }>({
            mutation: SEND_REGISTRATION_REQUEST,
            variables: { registrationRequest },
        })
        if (!response.data?.SendRegistrationRequest) {
            throw new Error('Error creating the REGISTRATION REQUEST')
        }
        return response.data?.SendRegistrationRequest
    }
}

const SEND_REGISTRATION_REQUEST = gql`
  mutation SendRegistrationRequest ($registrationRequest: SendRegistrationRequestInput!) {
    SendRegistrationRequest(
      input: $registrationRequest
    )
  }
`
