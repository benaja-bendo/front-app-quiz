import {ActionFunctionArgs} from "react-router-dom";
import AuthService from "@/services/AuthService.ts";

export const loginAction = async ({request}: ActionFunctionArgs) => {
    console.log("loginAction")
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    // const redirectTo = formData.get("redirectTo") as string;

    if (!email || !password) {
        return {
            status: 400,
            body: {
                success: false,
                message: "You must provide a email and password to log in",
            },
        };
    }
    const response = await AuthService.signin(email, password);
    if (response.success) {
        return {
            status: 200,
            body: {
                success: true,
                message: "You are logged in",
            },
        };
    }
}