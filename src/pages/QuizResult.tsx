import React from 'react';
import {useLoaderData, Link} from 'react-router-dom';
import Confetti from 'react-confetti';

interface TQuizResult {
    correctAnswers: number;
    totalQuestions: number;
    timeTaken: number;
}

export const QuizResult: React.FC = () => {
    const quizResult = useLoaderData() as TQuizResult;
    const [showConfetti, setShowConfetti] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowConfetti(false);
        }, 5000); // 5 seconds

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            {showConfetti && (
                <Confetti
                    width={window.innerWidth}
                    height={window.innerHeight}
                    recycle={false}
                    numberOfPieces={300}
                />
            )}
            <div
                className="relative bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
                <div className="mx-auto max-w-md">
                    <h2 className="text-2xl font-semibold mb-4">Quiz terminé !</h2>
                    <p>
                        Vous avez répondu correctement à {quizResult.correctAnswers} questions
                        sur {quizResult.totalQuestions}.
                    </p>
                    <p>
                        Temps écoulé : {Math.floor(quizResult.timeTaken / 60)} minutes
                        et {quizResult.timeTaken % 60} secondes.
                    </p>

                    <Link to="/"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block">
                        Retour à l'accueil
                    </Link>
                </div>
            </div>
        </div>
    );
};
