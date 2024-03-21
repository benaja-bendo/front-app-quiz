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
import {loginAction} from "@/routes/actions/loginAction.ts";
import {Register} from "@/pages/Register.tsx";
import {RegisterAction} from "@/routes/actions/RegisterAction.ts";
import {About} from "@/pages/About.tsx";
import {Profile} from "@/pages/Profile.tsx";


const routes: RouteObject[] = [
    {
        id: "main",
        path: "",
        loader: authenticateLoader,
        element: <MainLayout />,
        // hasErrorBoundary: true,
        // errorElement: <p>Error</p>,
        children: [
            {
                index: true,
                path: "/",
                Component: Home,
            },
            {
                path: "/about",
                Component: About,
            },
            {
                path: "/profile",
                Component: Profile,
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
                action: loginAction,
            },
            {
                path: 'register',
                Component: Register,
                action: RegisterAction,
            }
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