import React from "react";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";
import "@/css/card-quiz.scss";
import {TQuiz} from "@/types/TQuiz.ts";


export const CardQuiz: React.FC<{ quiz: TQuiz }> = (props) => {
    const {quiz} = props;
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
                    <Link to={`/quiz/${Number(quiz.id)}`}>Commencer le quiz</Link>
                </Button>
            </CardFooter>
        </Card>
    );
}