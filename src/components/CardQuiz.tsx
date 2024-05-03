import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import "@/css/card-quiz.scss";

interface IQuiz {
    id?: number;
    title: string;
    description: string;
}

export const CardQuiz: React.FC<IQuiz> = (quiz) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className={"pline"}>{quiz.title}</CardTitle>
                <CardDescription>
                    <div className={"flex gap-1 mb-1"}>
                        <Badge variant="secondary">JS</Badge>
                        <Badge variant="secondary">php</Badge>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>{quiz.description}</CardContent>
            <CardFooter>
                <Button
                    className={"w-full"}
                    asChild={true}
                    variant="secondary">
                    <Link to={`/quiz/${quiz.id}`}>Commencer le quiz</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}