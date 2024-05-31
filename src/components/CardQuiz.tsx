import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card.tsx";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button.tsx";
import { Link } from "react-router-dom";


export const CardQuiz: React.FC = ({quiz}) => {    
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
                <Link to={`/quiz/${quiz?.id}`}>
                <Button className={"w-full"} variant="secondary">
                    Commencer le quiz
                </Button>
                </Link>
            </CardFooter>
        </Card>
    );
};
