import React, { useEffect, useState } from "react";
import { CardQuiz } from "@/components/CardQuiz.tsx";
import { ArticlesQuiz } from "@/components/ArticlesQuiz.tsx";
import { GenerateQuiz } from "@/components/GenerateQuiz.tsx";

// import { CopyIcon } from "@radix-ui/react-icons"

import "@/pages/Home.scss"
import Search from "@/components/img/search.svg";
import Photo from "@/components/img/photo-présentation.svg";
import Rod from "@/components/img/rod.svg"
import HttpService from "@/services/HttpService";

type TQuiz = {
    title: string;
    level: string;
}

export const Home: React.FC = () => {

    const filters = ["Facile", "Moyen", "Difficile"];
    const filters2 = [
        "Tous les quiz (156)",
        "Monuments célèbres",
        "Animaux du monde",
        "Jeux olympiques",
        "7 merveilles du monde",
        "Voitures",
        "Capitales mondiales",
        ">"
    ];

    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
    const [selectedFilter2, setSelectedFilter2] = useState<string | null>(null);
    const [data, setData] = useState({ hits: [] });

    const handleClick = (index: number) => {
        setSelectedFilter(String(index));
    };

    const handleClick2 = (index: number) => {
        setSelectedFilter2(String(index));
    };

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
        const {data} = await HttpService.get<TQuiz[]>("/quizzes")
        setQuizzes(data)
    }


    return (<>
        <div>
            <div className="header">
                <div className="desktop-only">
                    <img src={Photo} alt="Logo-app" />
                </div>
                <div className="right">
                    <strong className="title-header">Découvrez votre&nbsp;<span className="purple">quiz idéal</span></strong>
                    <div className="all-filters">
                        {filters.map((filter, index) => (
                            <button
                                key={index}
                                className={`filters ${selectedFilter === String(index) ? "selected" : ""}`}
                                onClick={() => handleClick(index)}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                    <div className="search-container">
                        <input type="text" placeholder="Rechercher..." className="search-input" />
                        <button className="search-button">
                            <img src={Search} alt="search" />
                        </button>
                    </div>

                </div>
            </div>
            <div className="body">
                <div className="items-center mb-4">
                    <div className="quiz">
                        <h2 className="text-2xl font-semibold">Quiz en vedettes</h2>
                        <img src={Rod} alt="rod" style={{ margin: "30px 30px 30px 30px" }} />
                        <div className="all-filters">
                            {filters2.map((filter2, index) => (
                                <button
                                    key={index}
                                    className={`filters ${selectedFilter2 === String(index) ? "selected" : ""}`}
                                    onClick={() => handleClick2(index)}
                                >
                                    {filter2}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                    {Quizzes.map((quiz, index) => (
                        <CardQuiz key={index} title={quiz.title} description={quiz.level}/>
                    ))}
                </div>
            </div>
            <div className="body">
                <div className="items-center mb-4">
                    <div className="quiz">
                        <h2 className="text-2xl font-semibold">Important articles</h2>
                        <img src={Rod} alt="rod" style={{ margin: "30px 30px 30px 30px" }} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                    <ArticlesQuiz title="Quiz 1" description="Description 1" />
                </div>
            </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white p-5 shadow-2xl">
            <div className="container mx-auto p-4">
                <div className="flex gap-2 justify-end items-center">
                  <GenerateQuiz/>
                </div>
            </div>
        </div>
    </>);
}