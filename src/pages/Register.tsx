import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import {Form} from "react-router-dom";

export const Register: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className={"w-full max-w-xs mx-auto h-screen grid place-content-center"}>
            <Form action={'/auth/register'} method="post" replace className={"grid gap-4"}>
                <h1 className={"text-2xl font-bold"}>Register</h1>
                <label className={"grid gap-1"}>
                    Name:
                    <input
                        name={"name"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="name" value={name} onChange={e => setName(e.target.value)} required />
                </label>
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
                    type="submit">Create account</Button>
                <hr />
                <Button
                    className={"w-full bg-blue-500 text-white"}
                    type="button"
                    onClick={() => window.location.href = "/auth/login"}>Back to login page</Button>
            </Form>
        </div>
    );
}