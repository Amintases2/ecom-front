import Homepage from "../pages/Homepage.jsx";
import ShopPage from "../pages/Shop.jsx";

export const ROUTES = [
  {
    path: '/',
    element: <ShopPage />,
  },
  {
    path: '/about',
    element: <Homepage />,
  },
  {
    path: '/favorites/*',
    element: <Homepage />,
  },
  {
    path: '/auth',
    element: <Homepage />,
  },
  {
    path: '/register',
    element: <Homepage />,
  },
  {
    path: '/logout',
    element: <Homepage />,
  },
  {
    path: '/characters',
    element: <Homepage />,
  },
  {
    path: '/locations',
    element: <Homepage />,
  },
  {
    path: '/episodes',
    element: <Homepage />,
  },
  {
    path: '*',
    element: <Homepage />,
  },
];

export default ROUTES;