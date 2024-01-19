import { useState } from "react";
import MenuItem from "../components/Menu/MenuItem";


const items = [
    {
        name: "build",
        subItems: [
            "description",
            "folder",
        ],
    }
]

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
            <div className={`dropdown ${isOpen ? "open" : ""}`}>
                <button onClick={() => setIsOpen(!isOpen)}>
                    Preference
                </button>
                <div
                    style={{height: `${subMenuHeight || 168}px`}}
                    className="menu"
                >
                    <div className={`menu-linear ${isSubMenuOpen ? "open" : ""}`}>
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