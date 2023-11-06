import Avatar from "../../assets/user.png";
import {SideBarProfileWrapper} from "../../styles/SidebarStyled.jsx";
import UserServices from "../../../services/UserServices.jsx";


export function SideBarProfile(props) {
    const {firstName, lastName} = UserServices.getUserInfo()
    return (
        <>
            <SideBarProfileWrapper open={props.open}>
                <div>
                    <img src={Avatar} alt=""/>
                </div>
                <h2>{firstName} {lastName}</h2>
                <h5>Balance: 500$</h5>
            </SideBarProfileWrapper>
        </>
    )
}
