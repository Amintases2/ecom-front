import {BsFillPersonLinesFill} from "react-icons/Bs";
import {MdContacts} from "react-icons/Md";
import {FaList} from "react-icons/fa";

const sidebarRoutes = [
    {
        title: 'Data',
        links: [{
            title: 'Manage Team',
            path: '/manage-team',
            icon: <BsFillPersonLinesFill/>
        },
            {
                title: 'Contacts Information',
                path: '/contacts-information',
                icon: <MdContacts/>
            },
            {
                title: 'Invoice Balance',
                path: '/invoice-balance',
                icon: <FaList/>
            },
        ]
    },
    {
        title: 'Pages',
        links: [{
            title: 'Profile Form',
            path: '/profile-form',
            icon: <BsFillPersonLinesFill/>
        },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <BsFillPersonLinesFill/>
            },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <BsFillPersonLinesFill/>
            },
        ]
    },
    {
        title: 'Charts',
        links: [{
            title: 'Profile Form',
            path: '/profile-form',
            icon: <BsFillPersonLinesFill/>
        },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <BsFillPersonLinesFill/>
            },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <BsFillPersonLinesFill/>
            },
            {
                title: 'Calendar',
                path: '/calendar',
                icon: <BsFillPersonLinesFill/>
            },
        ]
    },
]


export {sidebarRoutes};