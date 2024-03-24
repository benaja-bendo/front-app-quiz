import React, { useState } from 'react';
import {useLoaderData} from "react-router-dom";

export const Quiz: React.FC = () => {
    const dataLoader = useLoaderData() as any[];
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const handleNextQuestion = () => {
        if (currentQuestion < dataLoader.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setCurrentQuestion(0);
            // Consider adding logic to display a completion message or redirect to a different screen
        }
    };

    return (
        <>
            <div className="quiz-container">
                <h2 className="quiz-title">{dataLoader[currentQuestion].title}</h2>
                <p className="quiz-question">{dataLoader[currentQuestion].question}</p>

                <div className="quiz-options">
                    {dataLoader[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            className="quiz-option-button"
                            // Add onClick handler for selecting options if needed
                        >
                            {option}
                        </button>
                    ))}
                </div>

                <button className="quiz-next-button" onClick={handleNextQuestion}>
                    {currentQuestion < dataLoader.length - 1 ? 'Question suivante' : 'Terminer'}
                </button>
            </div>
        </>
    );
};
