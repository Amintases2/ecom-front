import Avatar from "../../assets/user.png";
import {SideBarProfileWrapper} from "./SidebarStyled.jsx";

export function SideBarProfile(props) {
    return (
        <>
            <SideBarProfileWrapper open={props.open}>
                <div>
                    <img src={Avatar} alt=""/>
                </div>
                <h2>Marat Gabitov</h2>
                <h5>Smart Admin</h5>
            </SideBarProfileWrapper>
        </>
    )
}
