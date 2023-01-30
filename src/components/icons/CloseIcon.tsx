const CloseIcon = (): JSX.Element => {
    return (
        <svg className="m-auto"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="0.22168"
                y="14.1421"
                width="20"
                height="2"
                rx="1"
                transform="rotate(-45 0.22168 14.1421)"
                fill="#002E5D"
            />
            <rect
                width="20"
                height="2"
                rx="1"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 15.7781 14.1421)"
                fill="#002E5D"
            />
        </svg>
    )
}

export default CloseIcon;