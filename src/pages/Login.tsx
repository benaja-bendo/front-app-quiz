import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import {Form} from "react-router-dom";

export const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleLogin(url = "", data = {}) {
        
        const response = await fetch(url, {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({data})
        });

        if (!response.ok) throw new Error('Login failed');
        
        return response.json();
    }
    return (
        <div className={"w-full max-w-xs mx-auto h-screen grid place-content-center"}>
            <Form replace className={"grid gap-4"}>
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
                    type="submit"
                    onClick={()=>handleLogin("http://127.0.0.1:8000/api/v1/auth/login", {email, password})}>Submit</Button>
                <hr />
                <Button
                    className={"w-full bg-blue-500 text-white"}
                    type="button"
                    onClick={() => window.location.href = "/auth/register"}>Register</Button>
            </Form>
        </div>
    );
}