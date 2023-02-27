interface AgeGroupItemProps {
    description: string;
    count: number;
}

const AgeGroupItem = ({description, count}: AgeGroupItemProps) => {
    return (
        <li className="flex gap-1 items-center">
            <p className="text-secondary-color font-input">{description}</p>
            <p className="text-primary-color font-text">{`[${count}]`}</p>
        </li>
    )
}

export default AgeGroupItem
