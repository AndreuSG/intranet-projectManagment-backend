import { USER_ROLE } from "../enums/user.role";

export interface TokenPayload {
    id: number;
    role: USER_ROLE;
    username: string;
}