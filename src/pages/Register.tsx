import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
import {Form} from "react-router-dom";
import { useNavigate } from "react-router-dom";


export const Register: React.FC = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const  navigate = useNavigate();

    async function handleRegister(url = "", data = {}) {
        const response = await fetch(url, {
            method : "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            //redirect : "follow", 
            body: JSON.stringify({data})
        });
        return response.json();
    }

    const redirect = async () => {
        await handleRegister("http://127.0.0.1:8000/api/auth/register", {name, email, password}) 
        navigate("/quiz/:id")
    }

    return (
        <div className={"w-full max-w-xs mx-auto h-screen grid place-content-center"}>
            <Form replace className={"grid gap-4"}>
                <h1 className={"text-2xl font-bold"}>Inscription</h1>
                <label className={"grid gap-1"}>
                    Nom:
                    <input
                        name={"name"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="text" value={name} onChange={e => setName(e.target.value)} required />
                </label>
                <label className={"grid gap-1"}>
                    Email:
                    <input
                        name={"email"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="email" value={email} onChange={e => setEmail(e.target.value)} required />
                </label>
                <label className={"grid gap-1"}>
                    Mot de passe:
                    <input
                        name={"password"}
                        className={"w-full p-2 border border-gray-300 rounded-md"}
                        type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                </label>
                <Button
                    className={"w-full"}
                    type="submit"
                    onClick={redirect}>S'inscrire</Button>
                <hr />
                <Button
                    className={"w-full bg-blue-500 text-white"}
                    type="button"
                    onClick={() => window.location.href = "/auth/login"}>Login</Button>
            </Form>
        </div>
    );
}