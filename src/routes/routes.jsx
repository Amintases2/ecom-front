import Homepage from "../pages/Homepage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import MyHistoryPage from "../pages/MyHistoryPage.jsx";

export const ROUTES = [
  {
    path: "/",
    element: <ShopPage />,
  },
  {
    path: "/about",
    element: <Homepage />,
  },
  {
    path: "/my-history",
    element: <MyHistoryPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <Homepage />,
  },
  {
    path: "/logout",
    element: <Homepage />,
  },
  {
    path: "/characters",
    element: <Homepage />,
  },
  {
    path: "/locations",
    element: <Homepage />,
  },
  {
    path: "/episodes",
    element: <Homepage />,
  },
  {
    path: "*",
    element: <Homepage />,
  },
];

export default ROUTES;
