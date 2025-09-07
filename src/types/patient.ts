export interface IPatientHealthData {
  id: string;
  patientId: string;
  gender: "MALE" | "FEMALE" | "OTHER";
  dateOfBirth: string; // ISO string
  bloodGroup:
    | "A_POSITIVE"
    | "A_NEGATIVE"
    | "B_POSITIVE"
    | "B_NEGATIVE"
    | "O_POSITIVE"
    | "O_NEGATIVE"
    | "AB_POSITIVE"
    | "AB_NEGATIVE";
  height?: number;
  weight?: number;
  allergies?: string;
  medicalHistory?: string;
}

export interface IMedicalReport {
  id: string;
  patientId: string;
  reportType: string;
  reportUrl: string;
  createdAt: string;
}

export interface IPatient {
  id: string;
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  profilePhoto: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
  medicalReport: IMedicalReport[];
  patientHealthData: IPatientHealthData;
}
