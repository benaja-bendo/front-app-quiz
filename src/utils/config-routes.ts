export interface Route {
    login: string;
    logout: string;
    register: string;
    quizzes: {
        getAll: string;
        create: string;
        show: (id: number) => string;
        me: (id: number) => string;
        delete: (id: number) => string;
    };
    demand: {
        create: (id: number) => string;
    };
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout',
    register: import.meta.env.VITE_API_ROUTE_REGISTER || '/register',
    quizzes: {
        getAll: import.meta.env.VITE_API_ROUTE_PLANTS_GET_ALL || '/quizzes',
        create: import.meta.env.VITE_API_ROUTE_PLANTS_CREATE || '/quizzes',
        show: (id: number) => `/quizzes/${id}`,
        me: (id: number) => `/quizzes/me/${id}`,
        delete: (id: number) => `/quizzes/${id}`,
    },
    demand: {
        create: (id: number) => `/quizzes/${id}/demands`,
    },
};

export default configRoutes;