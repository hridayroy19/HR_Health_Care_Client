export interface IDoctor {
    id: string;
    name: string;
    email: string;
    gender: string;
    role: string;
    appointmentFee: string;
    experience: string;
    address: string;
    contactNumber: string;
};

export interface IDoctorUpdate {
    id: string;
    name: string;
    email: string;
    gender: string;
    role: string;
    appointmentFee: string;
    experience: string;
    address: string;
    contactNumber: string;
    registrationNumber:string
    qualification:string
    currentWorkingPlace:string
    designaton:string
};