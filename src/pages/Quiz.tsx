import React, {useState} from "react";
import {useLoaderData} from "react-router-dom";

export const Quiz: React.FC = () => {
    const dataLoader = useLoaderData() as any[];
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const handleNextQuestion = () => {
        if (currentQuestion < dataLoader.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(0)
        }
    }
    return (
        <>
            <div className="container mx-auto p-4 overflow-y-auto">
                <h2 className="text-2xl font-semibold">{dataLoader[currentQuestion].title}</h2>
                <p>{dataLoader[currentQuestion].question}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
                    {dataLoader[currentQuestion].options.map((option, index) => (
                        <div key={index} className="p-4 border-2 border-gray-200 rounded-lg">
                            {option}
                        </div>
                    ))}
                </div>
                <button
                    className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
                    onClick={handleNextQuestion}
                >
                    Question suivante
                </button>
            </div>
        </>
    );
}