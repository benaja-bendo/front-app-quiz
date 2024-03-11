import {UserType} from "@/types/UserType.ts";

export type ResponseLoginActionType = {
    token: string,
    user: UserType,
    tenant_id?: string,
    tenant_name?: string,
}