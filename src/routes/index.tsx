import {
    createBrowserRouter,
    RouteObject,
} from "react-router-dom";
import {Home} from "@/pages/Home.tsx";
import {GuestLayout} from "@/layout/GuestLayout.tsx";
import {GuestLoader} from "@/routes/loaders/GuestLoader.ts";
import {Login} from "@/pages/Login.tsx";
import {Error404} from "@/pages/Error404.tsx";
import {authenticateLoader} from "@/routes/loaders/authenticateLoader.ts";
import {MainLayout} from "@/layout/MainLayout.tsx";


const routes: RouteObject[] = [
    {
        id: "main",
        path: "",
        loader: authenticateLoader,
        element: <MainLayout />,
        hasErrorBoundary: true,
        errorElement: <p>Error</p>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
        ]
    },
    {
        path: "/auth",
        element: <GuestLayout />,
        loader: GuestLoader,
        children: [
            {
                path: "login",
                Component: Login,
            },
        ]
    },
    {
        path: "*",
        Component: Error404,
    }
];

export const Router = createBrowserRouter(routes, {
    basename: "/",
    window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}