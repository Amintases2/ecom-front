import { useState } from 'react'
import '/src/styles/_font.css'
// import '/src/styles/_global.css'


import {Route, Routes} from "react-router";
import Sidebar from "./components/layouts/Sidebar.jsx";
import ROUTES from "./routes/routes.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
            <Route path='/' element={<Sidebar/>}>
                {ROUTES.map((route, index)=>(
                    <Route key={index} path={route.path} element={route.element} />
                ))}
            </Route>
        </Routes>
    </>
  )
}

export default App
