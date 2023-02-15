interface PageHeaderProps {
    title?: string | null;
    description?: string | null;
}

const PageHeaderProps = ({title, description}: PageHeaderProps) => {
    return (
        <div>
            {title && <h1 className="mb-4 font-big-title text-secondary-color">{title}</h1>}
            <p className="font-text text-secondary-color">{description}</p>
        </div>
    )
}

export default PageHeaderProps

