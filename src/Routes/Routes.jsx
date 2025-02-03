import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../shared/NotFound/NotFound";
import HomeMain from "../Components/HomeComponents/HomeMain";
import Service from "../Components/Services/Service";
const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <HomeMain/>,
            },
            {
                path: '/home',
                element: <HomeMain/>,
            },
            {
                path: '/services',
                element: <Service/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            }
        ],
    }
]);

export default routes;