/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

//get all categories
export const getAllSpecialties = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/Specialties`, {
            next: {
                tags: ["SPECILETES"],
            },
        });
       console.log(res,"data")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};