import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";

interface IQuiz {
    id?: number;
    title: string;
    description: string;
}

export const CardQuiz: React.FC<IQuiz> = (quiz) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <div className={"flex gap-1 mb-1"}>
                    <Badge variant="secondary">JS</Badge>
                    <Badge variant="secondary">PHP</Badge>
                </div>
            </CardHeader>
            <CardContent>
                <div>{quiz.description}</div>
            </CardContent>
            <CardFooter>
                <Button className={"w-full"} asChild={true} variant="secondary">
                    <Link to={`/quiz/${quiz.id}`}>Commencer le quiz</Link>
                </Button>
            </CardFooter>
        </Card>
    );
};
