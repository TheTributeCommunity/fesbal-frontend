import React from 'react'

interface EntityUserSignatureHeaderProps {
    firstName: string;
    lastName: string;
    identityDocumentNumber: string;
}

const EntityUserSignatureHeader = ({ firstName, lastName, identityDocumentNumber }: EntityUserSignatureHeaderProps) => {
    return (
        <div className="mb-6 flex flex-col gap-2 px-6">
            <h1 className="font-roboto-flex text-big-title text-secondary-color">{firstName} {lastName}</h1>
            <h2 className="font-roboto-flex text-medium-title text-primary-color">{identityDocumentNumber}</h2>
        </div>
    )
}

export default EntityUserSignatureHeader
