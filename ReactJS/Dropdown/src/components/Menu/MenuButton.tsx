interface MenuBtnProps {
    name: string,
    icon?: string,
    index?: number,
    hasSubItems?: boolean,
    subMenuHeight?: number,
    onClick?: (index: number, subMenuHeight: number) => void
}

export default function MenuButton({
    name,
    icon,
    index,
    hasSubItems,
    subMenuHeight,
    onClick,
}: MenuBtnProps) {

    return (
        <>
            <button onClick={() => {
                onClick ? onClick(index as number, subMenuHeight as number) : null
            }}>
                <span>{icon || name}</span>
                {name}
                {hasSubItems && <span>Chevron_right</span>}
            </button>
        </>
    )
}