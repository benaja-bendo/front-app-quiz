import React from "react";
import {Articles, ArticlesHeader, ArticlesFooter, ArticlesTitle, ArticlesDescription, ArticlesContent} from "@/components/ui/article.tsx";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button.tsx";
import {Link} from "react-router-dom";

interface IQuiz {
    id?: number;
    title: string;
    description: string;
}

export const ArticlesQuiz: React.FC<IQuiz> = (quiz) => {
    return (
        <Articles>
            <ArticlesHeader>
                <ArticlesTitle>{quiz.title}</ArticlesTitle>
                <ArticlesDescription>
                    <div className={"flex gap-1 mb-1"}>
                        <Badge variant="secondary">JS</Badge>
                        <Badge variant="secondary">php</Badge>
                    </div>
                </ArticlesDescription>
            </ArticlesHeader>
            <ArticlesContent>
                <div>{quiz.description}</div>
            </ArticlesContent>
            <ArticlesFooter>
                <Button
                    className={"w-full"}
                    asChild={true}
                    variant="secondary">
                    <Link to={`/quiz/${quiz.id}`}>Commencer le quiz</Link>
                </Button>
            </ArticlesFooter>
        </Articles>
    );
}