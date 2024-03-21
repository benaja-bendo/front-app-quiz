import React from "react";
import {Button} from "@/components/ui/button.tsx";
import {CardQuiz} from "@/components/CardQuiz.tsx";
// import { CopyIcon } from "@radix-ui/react-icons"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export const Home: React.FC = () => {
    return (<>
        <div className="container mx-auto p-4 overflow-y-auto">
            <div className="flex justify-between items-center mb-4 border-b-2 border-black p-4">
                <h2 className="text-2xl font-semibold">Les Quizzes</h2>
                <div>
                    <input type="text" placeholder="Rechercher un quiz"
                           className="border-2 border-gray-200 p-2 rounded-lg"/>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <CardQuiz title="Quiz 1" description="Description 1"/>
                <CardQuiz title="Quiz 2" description="Description 2"/>
                <CardQuiz title="Quiz 3" description="Description 3"/>
                <CardQuiz title="Quiz 4" description="Description 4"/>
                <CardQuiz title="Quiz 5" description="Description 5"/>
                <CardQuiz title="Quiz 6" description="Description 6"/>
                <CardQuiz title="Quiz 7" description="Description 7"/>
            </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-2xl">
            <div className="container mx-auto p-4">
                <div className="flex gap-2 justify-end items-center">
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary">Généré son Quiz</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Généré son Quiz</DialogTitle>
                                <DialogDescription>
                                    Généré un quiz aléatoire pour vous ou pour vos amis
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2">
                                <div className="grid grid-rows-1 flex-1 gap-2">
                                    <div>
                                        <Label htmlFor="skill" className="sr-only">
                                            Skill
                                        </Label>
                                        <Input
                                            id="skill"
                                            defaultValue="javascript"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="level" className="sr-only">
                                            level
                                        </Label>
                                        <Input
                                            id="level"
                                            defaultValue="beginner"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                    <div className="flex gap-1">
                                        <Button type="button" variant="secondary">
                                            créer un quiz
                                        </Button>
                                        <Button type="button" variant="destructive">
                                            Annuler
                                        </Button>
                                    </div>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="secondary">Personnalisé son Quiz</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                            <DialogHeader>
                                <DialogTitle>Personnaliser son Quiz</DialogTitle>
                                <DialogDescription>
                                    Créer un quiz personnalisé pour vous ou pour vos amis
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex items-center space-x-2">
                                <div className="grid grid-rows-1 flex-1 gap-2">
                                    <div>
                                        <Label htmlFor="skill" className="sr-only">
                                            Skill
                                        </Label>
                                        <Input
                                            id="skill"
                                            defaultValue="javascript"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="level" className="sr-only">
                                           level
                                        </Label>
                                        <Input
                                            id="level"
                                            defaultValue="beginner"
                                            readOnly
                                        />
                                    </div>
                                </div>
                            </div>
                            <DialogFooter className="sm:justify-start">
                                <DialogClose asChild>
                                    <div className="flex gap-1">
                                        <Button type="button" variant="destructive">
                                            Annuler
                                        </Button>
                                        <Button type="button" variant="secondary">
                                            suivant
                                        </Button>
                                    </div>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </div>
    </>);
}