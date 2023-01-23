interface PageHeaderProps {
    title?: string | null;
    description?: string | null;
}


const AppPageHeader = ({title, description}: PageHeaderProps) => {
    return (
        <div className="flex w-full flex-col gap-8 self-center">
            <div>
                <h1 className="mb-4 font-big-title">{title}</h1>
                <p className="font-text">{description}</p>
            </div>
        </div>
    );
};

export default AppPageHeader;