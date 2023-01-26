interface PageHeaderProps {
    title?: string | null;
    description?: string | null;
}

export default ({title, description}: PageHeaderProps) => {
    return (
        <div>
            {title && <h1 className="mb-4 font-big-title">{title}</h1>}
            <p className="font-text">{description}</p>
        </div>
    );
};

