export interface Route {
    login: string;
    logout: string;
    register: string;
    quizzes: {
        getAll: string;
        create: string;
    };
}

const configRoutes: Route = {
    login: import.meta.env.VITE_API_ROUTE_LOGIN || '/login',
    logout: import.meta.env.VITE_API_ROUTE_LOGOUT || '/logout',
    register: import.meta.env.VITE_API_ROUTE_REGISTER || '/register',
    quizzes: {
        getAll: import.meta.env.VITE_API_ROUTE_QUIZZES_GET_ALL || '/quizzes',
        create: import.meta.env.VITE_API_ROUTE_QUIZZES_CREATE || '/quizzes',
},
};

export default configRoutes;