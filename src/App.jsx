import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Teste1 from "./pages/testes/Teste1";
import Teste2 from "./pages/testes/Teste2";
import Teste3 from "./pages/testes/Teste3";
import Teste4 from "./pages/testes/Teste4";
function App() {
    const router = createBrowserRouter([
        { path: "", element: <Home /> },
        {
            path: "/testes",
            element: (
                <div className="center">
                    <Outlet />
                </div>
            ),
            children: [
                { path: "1", element: <Teste1 /> },
                { path: "2", element: <Teste2 /> },
                { path: "3", element: <Teste3 /> },
                { path: "4", element: <Teste4 /> },
            ],
        },
    ]);
    return <RouterProvider router={router} />;
}

export default App;
