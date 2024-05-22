import { FC } from 'react';
import { Form, Navigate, useActionData } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const GenerateQuiz: FC = () => {
    const navigate = useNavigate();
    const data = useActionData() as { status?: number };
    if (data?.status !== undefined) return <Navigate to={'generate-quiz/start'} />;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title') as string;
        const level = formData.get('level') as string;
        navigate(`/start?title=${title}&level=${level}`);
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <Form onSubmit={handleSubmit} className="border border-gray-300 rounded-lg p-6">
                <p className="text-xl font-semibold mb-4">Générer un Quiz</p>
                <p className="text-gray-600 mb-4">Générer un quiz aléatoire pour vous ou pour vos amis</p>
                <div className="grid grid-cols-1 gap-4">
                    <Input id="skill" name="title" placeholder="Titre" required/>
                    <select name="level" className="block w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300">
                        <option value="facile">Facile</option>
                        <option value="moyen">Moyen</option>
                        <option value="difficile">Difficile</option>
                    </select>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button type="button" variant="secondary" className="mr-2">Annuler</Button>
                    <Button type="submit" variant="destructive">Créer un Quiz</Button>
                </div>
            </Form>
        </div>
    );
};

