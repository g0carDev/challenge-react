interface Props extends React.SVGAttributes<SVGElement> { }

export const DropdownIcon = (props: Props) => {
    return (
        <svg width="9" height="21" viewBox="0 0 9 21" fill="none" {...props}>
            <path d="M7 4.5L4.5 2.5L2 4.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M2 16.5L4.5 18.5L7 16.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
    )
}
