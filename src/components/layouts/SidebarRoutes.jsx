import {BsFillPersonLinesFill} from "react-icons/Bs";
import {AiOutlineShoppingCart} from "react-icons/Ai";
import {LiaSnowflakeSolid} from "react-icons/Lia";
import {AiOutlineHistory} from "react-icons/Ai";
import {AiOutlineDatabase} from "react-icons/Ai";
import {FiSettings} from "react-icons/Fi";
import {ImExit} from "react-icons/Im";
import {SlLogin} from "react-icons/Sl";
import {TbMessage2Exclamation} from "react-icons/Tb";


const sidebarRoutes = [
    {
        title: 'Data',
        links: [
            {
                title: 'Магазин',
                path: '/',
                icon: <AiOutlineShoppingCart/>
            },
            {
                title: 'История покупок',
                path: '/my-history',
                icon: <AiOutlineHistory/>
            },
            {
                title: 'Заморожено',
                path: '/contacts-information',
                icon: <LiaSnowflakeSolid/>
            },
        ]
    },
    {
        title: 'Contacts',
        links: [
            {
                title: 'Связь с нами',
                path: '/contact-us',
                icon: <BsFillPersonLinesFill/>
            },
        ]
    },
    {
        title: 'Admin',
        links: [
            {
                title: 'Заявки',
                path: '/calendar2',
                icon: <TbMessage2Exclamation/>
            },
            {
                title: 'Товары',
                path: '/products',
                icon: <AiOutlineDatabase/>
            },
            {
                title: 'Настройки',
                path: '/calendar1',
                icon: <FiSettings/>
            },

            // {
            //     title: 'История',
            //     path: '/calendar3',
            //     icon: <AiOutlineHistory/>
            // },
        ]
    },
    {
        title: 'Log',
        links: [
            {
                title: 'Вход',
                path: '/contact-us1',
                icon: <SlLogin/>
            },
            {
                title: 'Выход',
                path: '/contact-us2',
                icon: <ImExit/>
            },
        ]
    },
]


export {sidebarRoutes};