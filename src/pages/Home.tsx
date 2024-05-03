import React, { useState } from "react";
import { Button } from "@/components/ui/button.tsx";
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
import "@/pages/Home.scss"
import Search from "@/components/img/search.svg";
import Photo from "@/components/img/photo-présentation.svg";
import Rod from "@/components/img/rod.svg"
import {ListQuiz} from "@/components/quizzes/ListQuiz.tsx";

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

    const [selectedFilter2, setSelectedFilter2] = useState<string | null>(null);

    const handleClick2 = (index: number) => {
        setSelectedFilter2(String(index));
    };

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
                            <a
                                href={"#list-quiz"}
                                key={index}
                                className={`filters`}
                            >
                                {filter}
                            </a>
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

                <ListQuiz />
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