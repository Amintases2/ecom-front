import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { LiaSnowflakeSolid } from "react-icons/lia";
import { AiOutlineHistory } from "react-icons/ai";
import { AiOutlineDatabase } from "react-icons/ai";
import { FiSettings } from "react-icons/fi";
import { ImExit } from "react-icons/im";
import { SlLogin } from "react-icons/sl";
import { TbMessage2Exclamation } from "react-icons/tb";

const sidebarRoutes = [
  {
    title: "Data",
    links: [
      {
        title: "Магазин",
        path: "/",
        icon: <AiOutlineShoppingCart />,
      },
      {
        title: "История покупок",
        path: "/my-history",
        icon: <AiOutlineHistory />,
      },
      {
        title: "Заморожено",
        path: "/contacts-information",
        icon: <LiaSnowflakeSolid />,
      },
    ],
  },
  {
    title: "Contacts",
    links: [
      {
        title: "Связь с нами",
        path: "/contact-us",
        icon: <BsFillPersonLinesFill />,
      },
    ],
  },
  {
    title: "Admin",
    links: [
      {
        title: "Заявки",
        path: "/calendar2",
        icon: <TbMessage2Exclamation />,
      },
      {
        title: "Товары",
        path: "/products",
        icon: <AiOutlineDatabase />,
      },
      {
        title: "Настройки",
        path: "/calendar1",
        icon: <FiSettings />,
      },

      // {
      //     title: 'История',
      //     path: '/calendar3',
      //     icon: <AiOutlineHistory/>
      // },
    ],
  },
  {
    title: "Log",
    links: [
      {
        title: "Вход",
        path: "/login",
        icon: <SlLogin />,
      },
      {
        title: "Выход",
        path: "/contact-us2",
        icon: <ImExit />,
      },
    ],
  },
];

export { sidebarRoutes };
