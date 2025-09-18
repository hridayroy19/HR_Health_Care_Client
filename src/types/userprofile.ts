export interface UserProfile {
    data: UserProfile;
    id: string;
    name: string;
    email: string;
    contactNumber: string;
    profilePhoto: string;
    role: "ADMIN" | "USER" | "DOCTOR" | "PATIENT";
    status: string
    needPasswordChange: boolean;
    isDeleted: boolean;

}

