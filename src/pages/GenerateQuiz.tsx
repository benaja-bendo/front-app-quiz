import { FC } from 'react';
import { ActionFunctionArgs, Form, Navigate, useActionData } from 'react-router-dom';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useCurrentUser } from '@/hook/use-current-user';
import httpService from '@/services/HttpService';
import configRoutes from '@/utils/config-routes';

export const GenerateQuiz: FC = () => {
    const { currentUser } = useCurrentUser();
    const data = useActionData() as { status?: number };
    if (data?.status !== undefined) return <Navigate to={'/'} />;

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="secondary">Générer un Quiz</Button>
            </DialogTrigger>
            <DialogContent>
                <Form action="/" method="post" encType={"multipart/form-data"}>
                    <DialogHeader>
                        <DialogTitle>Générer un Quiz</DialogTitle>
                        <DialogDescription>
                            Générer un quiz aléatoire pour vous ou pour vos amis
                        </DialogDescription>
                    </DialogHeader><br></br>
                    <div className="flex items-center space-x-2">
                        <div className="grid grid-rows-1 flex-1 gap-2">
                            <span>
                            <Input id="skill" name="title" placeholder="title" />
                            </span>
                            <div>
                                <select name="level" className="block w-full px-4 py-2 border">
                                    <option value="facile">facile</option>
                                    <option value="moyen">moyen</option>
                                    <option value="difficile">difficile</option>
                                </select><br></br>
                            </div>
                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose>
                            <div className="flex gap-1">
                                <Button type="button" variant="secondary">Annuler</Button>
                                <Button type="submit" variant="destructive">Créer un Quiz</Button>
                            </div>
                        </DialogClose>
                    </DialogFooter>
                </Form>
            </DialogContent>
        </Dialog>
    );
};

export const GenerateQuizAction = async ({ request }: ActionFunctionArgs) => {
    const body = await request.formData();
    const res = await httpService.post(configRoutes.quizzes.getAll, body, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    console.log(res);
    return {
        status: 200,
        body: {
            message: 'Quiz ajouté avec succès'
        }
    };
};
