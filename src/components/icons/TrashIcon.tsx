interface Props extends React.SVGAttributes<SVGElement> {}

export const TrashIcon = (props: Props) => {
    return (
        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" {...props}>
            <path d="M1 16.5C1 17.0304 1.21071 17.5391 1.58579 17.9142C1.96086 18.2893 2.46957 18.5 3 18.5H11C11.5304 18.5 12.0391 18.2893 12.4142 17.9142C12.7893 17.5391 13 17.0304 13 16.5V4.5H1V16.5ZM3 6.5H11V16.5H3V6.5ZM10.5 1.5L9.5 0.5H4.5L3.5 1.5H0V3.5H14V1.5H10.5Z" fill="#A41D36" />
        </svg>

    )
}
