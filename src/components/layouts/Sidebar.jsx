import {Outlet} from "react-router";
import {SideBarBody, SideBarHeader, SidebarStyled} from "./SidebarStyled.jsx";
import {HiOutlineMenu} from "react-icons/hi";
import SideBarLinks from "./SidebarLinks.jsx";
import {SideBarProfile} from "./SideBarProfile.jsx";
import {useState} from "react";
export default function Sidebar() {

    const [open, setOpen] = useState(false);

    return (
        <div style={{display: 'flex', alignItems:'start'}}>
            <SidebarStyled>
                <SideBarBody open={open}>
                    <SideBarHeader open={open}>
                        <h3>Dashboard</h3>
                        <button onClick={() => setOpen(!open)}><HiOutlineMenu/></button>
                    </SideBarHeader>
                    <SideBarProfile open={open}/>
                    <SideBarLinks open={open}/>
                </SideBarBody>
            </SidebarStyled>
            <Outlet/>
        </div>
    )
}