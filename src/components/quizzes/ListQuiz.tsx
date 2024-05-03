import {useEffect, useState} from 'react';
import HttpService from "@/services/HttpService.ts";
import {TQuiz} from "@/types/TQuiz.ts";
import {CardQuiz} from "@/components/CardQuiz.tsx";
import {ResponseApiType} from "@/types/ResponseApiType.ts";

export const ListQuiz = () =>{
const [Quizzes, setQuizzes] = useState<TQuiz[]>([
    {title: "Quiz 1", level: "Facile"},
    {title: "Quiz 2", level: "Difficile"},
    {title: "Quiz 3", level: "Moyen"},
    {title: "Quiz 4", level: "Moyen"},
    {title: "Quiz 5", level: "Facile"},
    {title: "Quiz 6", level: "Difficile"},
    {title: "Quiz 7", level: "Facile"},

])
    useEffect(() => {
        getQuizzes().then(r => r)
    }, [])
    const getQuizzes = async () => {
        const {data} = await HttpService.get<ResponseApiType<TQuiz[]>>("/quiz")
        setQuizzes(data.data)
    }
    return (
        <div id={"list-quiz"} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
            {Quizzes.map((quiz, index) => (
                <CardQuiz key={index} title={quiz.title} description={quiz.level}/>
            ))}
        </div>
    );
}