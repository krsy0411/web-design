import { useState } from "react";
import MenuItem from "../components/Menu/MenuItem";

const items = [
    {
      name: "build",
      subItems: ["description", "folder", "article"],
    },
    {
      name: "devices",
      subItems: ["storage", "mouse", "keyboard", "headphones"],
    },
    {
      name: "logout",
    },
];

export function Dropdown() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [activeSubMenu, setActiveSubMenu] = useState<number>(0);
    const [subMenuHeight, setSubMenuHeight] = useState<number>(0);

    function handleClick(index: number, subMenuHeight: number): void {
        if(index > -1) {
            setActiveSubMenu(index);
        }
        setSubMenuHeight(subMenuHeight);
        setIsSubMenuOpen(index > -1);
    }

    return (
        <>
            <div className={`dropdown ${isOpen ? "open" : ""}`} style={{ translate: "0 -50px" }}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    <span className="material-symbols-outlined"> settings </span>
                        Preferences
                    <span className="chevron material-symbols-outlined"> expand_more </span>
                </button>
                <div
                    style={{height: `${subMenuHeight || 138}px`}}
                    className="menu"
                >
                    <div className={`menu-inner ${isSubMenuOpen ? "open" : ""}`}>
                        <nav className="main-menu">
                            {
                                items.map((item,index) => (
                                    <MenuItem 
                                        key={item.name}
                                        name={item.name}
                                        index={index}
                                        activeSubMenu={activeSubMenu}
                                        subItems={item.subItems}
                                        onClick={handleClick}
                                    />
                                ))
                            }
                        </nav>
                    </div>
                </div>
            </div>  
        </>
    )
}