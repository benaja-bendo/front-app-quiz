import React, { useEffect, useState } from "react";
import { CardQuiz } from "./CardQuiz";

interface Quiz {
    id?: number;
    title: string;
    description: string;
}
export const QuizList : React.FC<Quiz> = () => {
    //const quizzes: Quiz[] =  [quiz];
    const [quizzes, setQuizzes] = useState<Quiz[] | null>(null);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const response = await fetch("http://127.0.0.1:8000/api/quiz/:id");
            const data = await response.json();
            setQuizzes(data);
        };
        fetchQuizzes();
    }, []);
    
    return ( 
        <div className="grid gap-4">
            {quizzes === null ? (
                <p>Loading quizzes...</p>
                ) : (
                quizzes.map((quiz) => (
                    <CardQuiz key={quiz.id} title={quiz.title} description={quiz.description} />
            ))
            )}
        </div>
    );
};
