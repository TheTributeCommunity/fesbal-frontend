import { BoosterClient } from "./booster-service";
import { RegistrationRequest } from "../models/registration-request";
import { gql } from "@apollo/client";

export class RegistrationRequestService {
    static async create(newRegistrationRequest: RegistrationRequest): Promise<boolean> {
        const result = await BoosterClient.mutate<{ CreateRegistrationRequest: boolean }>({
            mutation: CREATE_REGISTRATION_REQUEST,
            variables: { newRegistrationRequest },
        })
        if (!result.data?.CreateRegistrationRequest) {
            throw new Error('Error creating the REGISTRATION REQUEST')
        }
        return result.data?.CreateRegistrationRequest
    }
}

const CREATE_REGISTRATION_REQUEST = gql`
  mutation ($newRegistrationRequest: CreateRegistrationRequestInput!) {
    CreateRegistrationRequest(input: $newRegistrationRequest)
  }
`
