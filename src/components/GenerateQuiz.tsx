import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button.tsx";

export const GenerateQuiz: React.FC = () => {
    const [skill, setSkill] = useState("javascript"); // Valeur par défaut pour le skill
    const [level, setLevel] = useState("facile"); // Valeur par défaut pour le niveau

    const handleCreateQuiz = async () => {
        try {
            const response = await fetch('/api/quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    skill: skill,
                    level: level
                })
            });
            // Gérer la réponse si nécessaire
        } catch (error) {
            console.error('Error:', error);
            // Gérer les erreurs ici
        }
    };

    return (
        <Dialog>
            <DialogTrigger>
                <Button variant="secondary">Générer un Quiz</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Générer un Quiz</DialogTitle>
                    <DialogDescription>
                        Générer un quiz aléatoire pour vous ou pour vos amis
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center space-x-2">
                    <div className="grid grid-rows-1 flex-1 gap-2">
                        <div>
                            <Input id="skill" value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill" />
                        </div>
                        <div>
                            <select value={level} onChange={(e) => setLevel(e.target.value)} className="block w-full px-4 py-2 border">
                                <option value="facile">facile</option>
                                <option value="moyen">moyen</option>
                                <option value="difficile">difficile</option>
                            </select>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <div className="flex gap-1">
                            <Button type="button" variant="secondary">Annuler</Button>
                            <Button type="button" variant="destructive" onClick={handleCreateQuiz}>Créer un Quiz</Button>
                        </div>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
