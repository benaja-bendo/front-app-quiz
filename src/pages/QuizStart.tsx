import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const QuizStart: FC = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="max-w-md w-full border border-gray-300 rounded-lg p-6">
                <p className="text-xl font-semibold mb-4">Récapitulatif</p>
                <div className="mb-4">
                    <p className="font-semibold">Titre</p>
                    <p>title</p>
                </div>
                <div className="mb-4">
                    <p className="font-semibold">Niveau</p>
                    <p>level</p>
                </div>
                <div className="mt-4 flex justify-center">
                    <Link to="">
                        <Button variant="destructive">Start</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
