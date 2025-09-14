import z from "zod";

export const DoctorValidatinSchema = z.object({
    password: z.string().min(6, "Password is required"),
    doctor: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Invalid email").optional(),
        contactNumber: z.string().min(7, "Contact number is required"),
        address: z.string().optional(),
        registrationNumber: z.string().min(1, "Registration number is required"),
        experience: z.coerce.number().nonnegative("Experience must be >= 0"),
        gender: z.enum(["MALE", "FEMALE"]),
        appointmentFee: z.coerce.number().nonnegative("Appointment fee is required"),
        qualification: z.string().min(1),
        currentWorkingPlace: z.string().min(1),
        designaton: z.string().min(1),
    }),
});
