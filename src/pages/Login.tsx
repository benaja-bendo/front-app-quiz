import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import {Form} from "react-router-dom";

export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    return (
        <div className={"w-full max-w-xs mx-auto h-screen grid place-content-center"}>
            <Form action={'/auth/login'} method="post" replace className={"grid gap-4"}>
                <h1 className={"text-2xl font-bold"}>Login</h1>
                <label className={"grid gap-1"}>
                    Email:
                    <input
                        name={"email"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label className={"grid gap-1"}>
                    Password:
                    <input
                        name={"password"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <Button
                    className={"w-full"}
                    type="submit">Submit</Button>
                <hr />
                <Button
                    className={"w-full bg-blue-500 text-white"}
                    type="button"
                    onClick={() => window.location.href = "/auth/register"}>Register</Button>
            </Form>
        </div>
    );
}