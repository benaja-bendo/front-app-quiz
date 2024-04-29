import {ActionFunctionArgs} from "react-router-dom";
import AuthService from "@/services/AuthService.ts";

export const registerAction = async ({request}: ActionFunctionArgs) => {
    console.log("registerAction")
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (!name || !email || !password) {
        return {
            status: 400,
            body: {
                success: false,
                message: "You must provide a name, email and password to log in",
            },
        };
    }
    const response = await AuthService.register(name, email, password);
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