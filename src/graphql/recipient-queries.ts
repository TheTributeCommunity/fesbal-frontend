import { gql } from '@apollo/client'

export const GET_ALL_RECIPIENTS = gql`
  query ListRecipientReadModels  {
    ListRecipientReadModels  {
      items {
        id
        firstName
        lastName
        dateOfBirth
        typeOfIdentityDocument
        identityDocumentNumber
        phone
        phoneVerified
        email
        relativesIds
        referralSheetUrl
        role
      }
    }
  }
`

export const GET_RECIPIENT_BY_PHONE = gql`
  query ListRecipientReadModels ($phone: String!) {
    ListRecipientReadModels(
      filter: { phone: {eq: $phone } }
      sortBy: {}
  )  {
      items {
        id
        firstName
        lastName
        dateOfBirth
        typeOfIdentityDocument
        identityDocumentNumber
        phone
        email
        relativesIds
        relatives{
          id
          firstName
          lastName
          dateOfBirth
          typeOfIdentityDocument
          identityDocumentNumber
        }
        referralSheetUrl
      }
    }
  }
`

export const REFERRAL_SHEET_UPLOAD_URL = gql`
  mutation ReferralSheetUploadUrl($filename: String!) {
    ReferralSheetUploadUrl(
      input: { filename: $filename }
    ) {
      url,
      fields
    }
  }
`

export const GET_RECIPIENT_BY_ID = gql`
    query RecipientReadModel ($id: ID!) {
        RecipientReadModel (id: $id) {
            id
            firstName
            lastName
            dateOfBirth
            typeOfIdentityDocument
            identityDocumentNumber
            phone
            phoneVerified
            email
            relativesIds
            referralSheetUrl
            deleted
            relatives {
                id
                recipientUserId
                firstName
                lastName
                dateOfBirth
                typeOfIdentityDocument
                identityDocumentNumber
            }
        }
    }
`

export const GET_RECIPIENT_MESSAGES = gql`
    query RecipientReadModel ($id: ID!) {
        RecipientReadModel (id: $id) {
            pendingSignsIds
            notifications {
                id
                title
                body
                read
                createdAt
                readAt
                isDeleted
            }
        }
    }
`

export const GET_RECIPIENTS_BY_ID_DOCUMENT_NUMBER = gql`
query ListRecipientReadModels ($id: String!) {
    ListRecipientReadModels(
      filter: { identityDocumentNumber: {eq: $id }    }
      sortBy: {}
  )  {
      items {
        id
        firstName
        lastName
        identityDocumentNumber
        relatives {
            id
            recipientUserId
            firstName
            lastName
            dateOfBirth
            typeOfIdentityDocument
            identityDocumentNumber
        }
      }
    }
  }
`


export const CREATE_RECIPIENT = gql`
  mutation CreateRecipient ($recipient: CreateRecipientInput!) {
    CreateRecipient(input: $recipient)
  }
`

export const UPDATE_RECIPIENT_EMAIL = gql`
  mutation ($updatedUser: UpdateRecipientEmailInput!) {
    UpdateRecipientEmail(input: $updatedUser)
  }
`

export const UPDATE_RECIPIENT = gql`
    mutation ($updatedUser: UpdateRecipientInput!) {
        UpdateRecipient(input: $updatedUser)
    }
`

export const UPDATE_RECIPIENT_REFERRAL_SHEET_URL = gql`
  mutation ($updatedUser: UpdateRecipientUserReferralSheetUrlInput!) {
    UpdateRecipientUserReferralSheetUrl(input: $updatedUser)
  }
`

export const DELETE_RECIPIENT_USER = gql`
  mutation ($userToDelete: DeleteRecipientUserInput!) {
    DeleteRecipientUser(input: $userToDelete)
  }
`

export const SUBSCRIBE_TO_RECIPIENT_USER = gql`
    subscription ($id: ID!) {
        RecipientReadModel(id: $id) {
            id
            firstName
            lastName
            dateOfBirth
            typeOfIdentityDocument
            identityDocumentNumber
            phone
            email
            referralSheetUrl
            relativesIds
        }
    }
`

export const SUBSCRIBE_TO_RECIPIENT_MESSAGES = gql`
    subscription ($id: ID!) {
        RecipientReadModel(id: $id) {
            pendingSignsIds
            notifications {
                id
                title
                body
                read
                createdAt
                readAt
                isDeleted
            }
        }
    }
`