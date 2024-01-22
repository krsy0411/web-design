import { MenuBtnProps } from "../../type/props.type"

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
                <span className="material-symbols-outlined">{icon || name}</span>
                {name}
                {hasSubItems && <span className="chevron material-symbols-outlined">Chevron_right</span>}
            </button>
        </>
    )
}