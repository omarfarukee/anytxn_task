import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../shared/NotFound/NotFound";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <div>Home</div>,
            },
            {
                path: '/home',
                element: <div>Home</div>,
            },
            {
                path: '*',
                element: <NotFound/>,
            }
        ],
    }
]);

export default routes;