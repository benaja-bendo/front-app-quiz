import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import httpService from '@/services/HttpService';
import configRoutes from '@/utils/config-routes';

export const QuizStart: FC = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const title = searchParams.get('title');
    const level = searchParams.get('level');

    const handleStartQuiz = async () => {
        // const res = await httpService.post(configRoutes.quizzes.getAll, { title, level });
        // console.log(res); 
        // const quizId = res.quizId; 
        // exemple pour voir si le redirect marcher ou pas
        const quizId = 123;
        
        window.location.href = `/quiz/${quizId}`;
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full border border-gray-300 rounded-lg p-6">
                <p className="text-xl font-semibold mb-4">Récapitulatif</p>
                <p className="text-gray-600 mb-4">Etes vous pret pour commencer ?</p>
                <div className="mb-4">
                    <p className="font-semibold">Titre du Quiz</p>
                    <p>{title}</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold">Niveau du Quiz</p>
                    <p>{level}</p>
                </div>
                <div className="mt-4 flex justify-end">
                <Link to="/generate-quiz">
                        <Button variant="secondary">Modifier</Button>
                    </Link>
                    <Button onClick={handleStartQuiz} variant="destructive">
                        Start
                    </Button>
                </div>
            </div>
        </div>
    );
};
