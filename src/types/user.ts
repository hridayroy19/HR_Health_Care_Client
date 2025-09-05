export interface IUser {
    email: string;
    role: "DOCTOR" | "ADMIN" | "SUPER_ADMIN" | "PATIENT";
    iat?: number;
    exp?: number;

}