interface PageHeaderProps {
    title?: string | null;
    description?: string | string[] | null;
}

const AppPageHeader = ({title, description}: PageHeaderProps) => {
    return (
        <div>
            {title && <h1 className="mb-4 font-big-title text-secondary-color">{title}</h1>}
            { Array.isArray(description) ? description.map((paragraph, index) => <div key={index}><p className="font-text text-secondary-color">{paragraph}</p>{index + 1 < description.length && <br />} </div>) :
            <p className="font-text text-secondary-color">{description}</p>}
        </div>
    )
}

export default AppPageHeader

