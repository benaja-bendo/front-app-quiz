import HttpService from '@/services/HttpService.ts';
import {UserType} from "@/types/UserType.ts";
import config from "@/config/config-app.ts";
import {ResponseLoginActionType} from "@/types/ResponseLoginActionType.ts";
import {ResponseApiType} from "@/types/ResponseApiType.ts";

interface AuthServiceProps {
    isAuthenticated: boolean;
    user: object | UserType;
    signin(email: string, password: string,school_name: string): Promise<void>;
    signout(): Promise<void>;
}

class AuthService implements AuthServiceProps {
    get isAuthenticated() {
        return localStorage.getItem('token') !== null && localStorage.getItem('user') !== null;
    }
    get user() {
        const user = localStorage.getItem('user');
        if (user) {
            return JSON.parse(user);
        }
        return null;
    }

    async signin(email: string, password: string, school_name: string) {
        try {
            const response = await HttpService.post<ResponseApiType<ResponseLoginActionType>>(config.api.routes.login, { email, password, school_name });
            if (response.status === 200) {
                const { token, user,tenant_id } = response.data.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('tenant_id', tenant_id || '');
            } else {
                console.error('Authentication failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    async signout() {
        try {
            const response = await HttpService.post<ResponseApiType<ResponseLoginActionType>>(config.api.routes.logout);
            if (response.status === 200) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                localStorage.removeItem('tenant_id');
            } else {
                console.error('Sign out failed');
            }
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
}

export default new AuthService();