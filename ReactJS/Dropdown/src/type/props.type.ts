export interface MenuItemProps {
    name: string,
    index: number,
    activeSubMenu: number,
    subItems?: string[],
    onClick: (index: number, subMenuHeight: number) => void
}

export interface MenuBtnProps {
    name: string,
    icon?: string,
    index?: number,
    hasSubItems?: boolean,
    subMenuHeight?: number,
    onClick?: (index: number, subMenuHeight: number) => void
}