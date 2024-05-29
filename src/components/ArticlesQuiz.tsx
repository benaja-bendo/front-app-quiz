// components/ArticlesQuiz.tsx
import React from 'react';

type ArticlesQuizProps = {
    title: string;
    description: string;
};

export const ArticlesQuiz: React.FC<ArticlesQuizProps> = ({ title, description }) => {
    return (
        <div className="articles-quiz-card">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};
