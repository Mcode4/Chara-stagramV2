import Layout from "./Layout";
import LandingPage from "../components/LandingPage";
import HomePage from "../components/HomePage";

export const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <LandingPage />
            },
            {
                path: '/home',
                element: <HomePage />
            },
        ]
    }
]);