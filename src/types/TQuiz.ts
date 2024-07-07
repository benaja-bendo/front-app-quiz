export type TQuiz = {
    id?: string;
    title: string;
    minutes: string;
    description: string;
    level: string;
    questions: TQuestion[];
}

export type ResponseT<T> = {
    data: T;
    success: boolean;
    message: string;
}

export type TQuestion = {
    id: string;
    question: string;
    type: string;
    hint: string;
    answers: TAnswer[];
}

export type TAnswer = {
    id: string;
    answer: string;
    isCorrect: boolean;
}