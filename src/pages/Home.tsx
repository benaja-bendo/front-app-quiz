import React from "react";
import {CardQuiz} from "@/components/CardQuiz.tsx";
// import { CopyIcon } from "@radix-ui/react-icons"
import {GenerateQuiz} from "@/components/GenerateQuiz.tsx"

export const Home: React.FC = () => {
    return (<>
        <div className="container mx-auto p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b-2 border-black p-4">
                <h2 className="text-2xl font-semibold">Les Quizzes</h2>
                <div>
                    <input type="text" placeholder="Rechercher un quiz"
                           className="border-2 border-gray-200 p-2 rounded-lg"/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                <CardQuiz title="Quiz 1" description="Description 1"/>
                <CardQuiz title="Quiz 2" description="Description 2"/>
                <CardQuiz title="Quiz 3" description="Description 3"/>
                <CardQuiz title="Quiz 4" description="Description 4"/>
                <CardQuiz title="Quiz 5" description="Description 5"/>
                <CardQuiz title="Quiz 6" description="Description 6"/>
                <CardQuiz title="Quiz 7" description="Description 7"/>
            </div>
        </div>

        <div className="fixed bottom-0 left-0 right-0 bg-white p-8">
            <div className="flex gap-2 justify-end items-center">
                <GenerateQuiz></GenerateQuiz>
            </div>
        </div>

    </>);
}