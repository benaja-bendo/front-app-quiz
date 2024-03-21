import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button.tsx";

interface IQuiz {
    title: string;
    description: string;
}

export const CardQuiz: React.FC<IQuiz> = (quiz) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{quiz.title}</CardTitle>
                <CardDescription>
                    <div className={"flex gap-1 mb-1"}>
                        <Badge variant="secondary">JS</Badge>
                        <Badge variant="secondary">php</Badge>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div>{quiz.description}</div>
            </CardContent>
            <CardFooter>
                <Button
                    className={"w-full"}
                    onClick={() => {
                        console.log("Commencer le quiz")
                    }}
                    variant="secondary">
                    Commencer
                </Button>
            </CardFooter>
        </Card>
    );
}