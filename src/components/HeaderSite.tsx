import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import React from "react";
import {Link} from "react-router-dom";

export const HeaderSite: React.FC = () => {
    return (<>
        <header className="p-4 bg-blue-500 text-white mb-2">
            <div className="container mx-auto flex justify-between items-center ">
                <a href="/" className="text-2xl">
                    App-Quiz
                </a>
                <nav className="flex justify-between items-center w-1/5">
                    <ul className="flex gap-4 items-center justify-end w-full">
                        <li><Link to="/">Quizzes</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li>
                            <Link to="/profile">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn"/>
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>);
}