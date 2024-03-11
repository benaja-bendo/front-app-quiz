import type { LoaderFunctionArgs } from "react-router-dom";
import {redirect} from "react-router-dom";
import AuthService from "@/services/AuthService.ts";

export function authenticateLoader({ request }: LoaderFunctionArgs) {
    if (!AuthService.isAuthenticated) {
        const params = new URLSearchParams();
        params.set("from", new URL(request.url).pathname);
        return redirect("/auth/login?" + params.toString());
    }
    return null;
}