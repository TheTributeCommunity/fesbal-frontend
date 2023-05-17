import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { namespaces } from '../../i18n/i18n.constants'
import DeleteIcon from '../icons/DeleteIcon'
import EditIcon from '../icons/EditIcon'
import {Relative} from '../../models/relative'

interface FamilyMemberCardProps {
    relative: Relative
    allowEdit?: boolean
    deleteRelative?: (id: string) => void
    editRelative?: (relative: Relative) => void
}

const FamilyMemberCard = ({relative, allowEdit = false, deleteRelative, editRelative}: FamilyMemberCardProps): JSX.Element => {
    const {t: translate} = useTranslation(namespaces.pages.registerFamilyMembers)

    return (
        <div className="w-full flex flex-col gap-4 bg-white shadow-md rounded-xl p-4 self-center">
            <div className="w-full flex flex-row justify-between">
                <div className="flex flex-col">
                    <span className="text-primary-color font-medium text-xs text-ellipsis overflow-hidden">{translate('personCard.fullName')}</span>
                    <span className="text-secondary-color font-bold text-lg text-ellipsis overflow-hidden">{`${relative.firstName} ${relative.lastName}`}</span>
                </div>
                {allowEdit &&
                <div className="flex flex-row align-center items-center gap-4">
                    <div className="cursor-pointer" onClick={() => deleteRelative && deleteRelative(relative.id)}><DeleteIcon /></div>
                    <div className="cursor-pointer" onClick={() => editRelative && editRelative(relative)}><EditIcon /></div>
                    <Link to={''}></Link>
                </div>}
            </div>
        </div>
    )
}

export default FamilyMemberCard