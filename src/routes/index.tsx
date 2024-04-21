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
import {Quiz} from "@/pages/Quiz.tsx";


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
      {
        path: "/quiz/:id",
        Component: Quiz,
        loader: async () => {
          return [
            {
              id: 1,
              title: "Quiz 1",
              question: "Quelle est la capitale de la France ?",
              options: ["Paris", "Lyon", "Marseille", "Bordeaux"],
            },
            {
              id: 2,
              title: "Quiz 2",
              question: "Quelle est la capitale de l'Espagne ?",
              options: ["Madrid", "Barcelone", "Valence", "Séville"],
            },
            // Ajoutez plus de questions de quiz ici
          ];
        },
      },
    ],
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
        path: "register",
        Component: Register,
        action: RegisterAction,
      },
    ],
  },
  {
    path: "/test",
    Component: () => {
        const getDta = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/test");
            const data = await response.json();
            console.log(data);
        }
      return <>
      <p>Test</p>
      <button onClick={getDta}>Load</button>
      </>;
    },
  },
  {
    path: "*",
    Component: Error404,
  },
];

export const Router = createBrowserRouter(routes, {
    basename: "/",
    window,
});

if (import.meta.hot) {
    import.meta.hot.accept();
    import.meta.hot.dispose(() => Router.dispose());
}