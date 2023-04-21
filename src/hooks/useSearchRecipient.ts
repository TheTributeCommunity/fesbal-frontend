import { useState } from 'react'
import { RecipientUserService } from '../services/recipient-user-service'

export interface SearchResult {
    fullName: string
    documentNumber: string
    id: string
}

const useSearchRecipient = () => {
    const [searchResults, setSearchResults] = useState<SearchResult[]>([])
    const MIN_SEARCH_LENGTH = 9

    const clearSearchResults = () => setSearchResults([])

    const searchById = async (id: string) => {
        const results = await RecipientUserService.getByDocumentId(id)
            .then(recipients => recipients.map(recipient => {
                return {
                    fullName: recipient.firstName + ' ' + recipient.lastName ?? '',
                    id: recipient.id ?? '',
                    documentNumber: recipient.identityDocumentNumber ?? ''
                } as SearchResult
            }))
        setSearchResults(results)
    }

    return { searchById, MIN_SEARCH_LENGTH, searchResults, clearSearchResults }
}

export default useSearchRecipient