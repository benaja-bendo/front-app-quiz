import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Quiz: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [quizzes, setQuizzes] = useState<any[]>([]);
    const [quizData, setQuizData] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [quizCompleted, setQuizCompleted] = useState<boolean>(false);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get('/api/v1/quizzes');
                setQuizzes(response.data);
            } catch (error) {
                console.error('Error fetching quizzes:', error);
            }
        };

        fetchQuizzes();
    }, []);

    useEffect(() => {
        // Call your backend API to fetch quiz data
        fetchQuizData();
    }, []);

    const fetchQuizData = async () => {
        try {
            const response = await fetch(`/api/v1/quizzes/${id}`);
            const data = await response.json();
            setQuizData(data);
        } catch (error) {
            console.error('Error fetching quiz data:', error);
        }
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quizData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null); // Reset selected option for next question
        } else {
            setQuizCompleted(true);
        }
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
    };

    const currentQuestion = quizData[currentQuestionIndex];

    if (quizData.length === 0) {
        return <div>Loading...</div>;
    }

    if (quizCompleted) {
        return <div>Congratulations! You have completed the quiz.</div>;
    }

    return (
        <>
            <div className="quiz-container">
                <h2 className="quiz-title">{currentQuestion.title}</h2>
                <p className="quiz-question">{currentQuestion.question}</p>

                <div className="quiz-options">
                    {quizzes.map((quiz, index) => (
                        <div key={index}>
                            <h3>{quiz.title}</h3>
                            <p>{quiz.question}</p>
                            {/* Add logic to display options and handle user responses */}
                        </div>
                    ))}
                </div>

                <button
                    className="quiz-next-button"
                    onClick={handleNextQuestion}
                    disabled={selectedOption === null} // Disable next button until an option is selected
                >
                    {currentQuestionIndex < quizData.length - 1 ? 'Next Question' : 'Finish'}
                </button>
            </div>
        </>
    );
};

export default Quiz;
