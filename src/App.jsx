import "/src/styles/_font.css";
// import '/src/styles/_global.css'
import { Route, Routes } from "react-router";
import Sidebar from "./components/layouts/Sidebar.jsx";
import ROUTES from "./routes/routes.jsx";
import { AuthContextProvider } from "./contexts/AuthContext.jsx";
import { AdminContextProvider } from "./contexts/AdminContext.jsx";
function App() {
  return (
    <>
      <AuthContextProvider>
        <AdminContextProvider>
          <Routes>
            <Route path="/" element={<Sidebar />}>
              {ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Route>
          </Routes>
        </AdminContextProvider>
      </AuthContextProvider>
    </>
  );
}

export default App;
