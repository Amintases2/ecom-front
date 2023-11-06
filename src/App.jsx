import "/src/styles/_font.css";
import { Route, Routes } from "react-router";
import Sidebar from "./components/layouts/Sidebar.jsx";
import ROUTES from "./routes/routes.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
function App() {
  return (
    <>
      <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              {ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
