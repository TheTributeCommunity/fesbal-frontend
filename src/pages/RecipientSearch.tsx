import classNames from 'classnames'
import { useEffect, useState } from 'react'
import SearchInput from '../components/atom/SearchInput'
import AppWrapper from '../components/molecules/AppWrapper'
import useAppInput from '../hooks/useAppInput'
import useSearchRecipient from '../hooks/useSearchRecipient'

const RecipientSearch = (): JSX.Element => {
    const { inputValue, deleteInputValue, handleInputChange } = useAppInput('')
    const { searchById, MIN_SEARCH_LENGTH, searchResults, clearSearchResults } = useSearchRecipient()
    const [searching, setSearching] = useState(false)
    
    const handleOnClear = () => {
        deleteInputValue()
        clearSearchResults()
    }

    useEffect(() => {
        if (inputValue.length >= MIN_SEARCH_LENGTH) {
            setSearching(true)
            searchById(inputValue).then(() => setSearching(false))
        }
        else clearSearchResults()
    }, [inputValue])

    return (
        <AppWrapper title="Buscar beneficiario por ID" showBurger={false} showBackButton containerClassName="px-0">
            <SearchInput value={inputValue} onChange={handleInputChange} onClear={handleOnClear} placeholder="ID del beneficiario" />
            {searchResults.map((result, index) => (
                <div key={index} className={classNames('w-full py-4 px-8 bg-white', {
                    'bg-[#DBF4FF]': index % 2 !== 0,
                })}>
                    <p className="text-secondary-color">{result.fullName}</p>
                    <p className="text-primary-color">{result.documentNumber}</p>
                </div>
            ))}
            <div className="w-full p-4 text-center text-2xl text-primary-color">
                {!searching && inputValue.length >= 9 && searchResults.length === 0 && (
                    <p>No se han encontrado resultados.</p>
                )}
                {searching && (
                    <p>Buscando...</p>
                )}
            </div>


        </AppWrapper>
    )
}

export default RecipientSearch