export interface ISpecialty {
    id: string;
    title: string;
    description: string;
    icon: string;
};

export interface IDoctorSpecialty {
  doctorId: string;
  specialitiesId: string;
  specialitie: ISpecialty;
}