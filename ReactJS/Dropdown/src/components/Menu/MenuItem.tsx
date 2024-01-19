import { useRef } from "react"
import MenuButton from "./MenuButton";

interface MenuItemProps {
    name: string,
    index: number,
    activeSubMenu: number,
    subItems: string[],
    onClick: (index: number, subMenuHeight: number) => void
}

export default function MenuItem({
    name,
    index,
    activeSubMenu,
    subItems,
    onClick
}: MenuItemProps) {
    const subMenuRef = useRef<any>(null);
    const isActive = activeSubMenu === index;

    return (
        <>
            <h1>메뉴 아이템 컴포넌트</h1>
            <MenuButton 
                name={name}
                index={index}
                hasSubItems={Boolean(subItems)}
                subMenuHeight={subMenuRef.current?.clientHeight}
                // subItems가 존재하면 onClick함수를 넘기고 아니면 null반환하는 함수 넘기기
                onClick={subItems ? onClick : () => null}
            />
            {
                subItems?.length && (
                    <nav
                        ref={subMenuRef}
                        className={`sub-menu ${isActive ? "open" : ""}`}
                    >
                        <MenuButton 
                            onClick={onClick}
                            icon="arrow-back"
                            name="name"
                        />
                        {
                            subItems?.map(subItem => (
                                <MenuButton 
                                    key={subItem}
                                    name={subItem}
                                />
                            ))
                        }
                    </nav>
                )
            }
        </>
    )
}