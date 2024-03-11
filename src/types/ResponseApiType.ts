export type ResponseApiType<T> = {
    code: number,
    message: string,
    data: T,
    success: boolean
}