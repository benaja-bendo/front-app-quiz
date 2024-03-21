import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import React from "react";

interface IQuiz {
    title: string;
    description: string;
}
export const CardQuiz: React.FC<IQuiz> = (quiz) => {
  return (
      <Card>
          <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
          </CardHeader>
          <CardContent>
              <p>Card Content</p>
          </CardContent>
          <CardFooter>
              <p>Card Footer</p>
          </CardFooter>
      </Card>
  );
}