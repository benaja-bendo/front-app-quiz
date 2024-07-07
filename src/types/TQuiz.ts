export type TQuiz = {
    id?: string;
    title: string;
    description: string;
    level: string;
}

export type ResponseT<T> = {
    data: T;
    success: boolean;
    message: string;
}