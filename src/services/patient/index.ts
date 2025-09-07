"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */


//get all categories
export const getAllPatient = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/patient`, {
            next: {
                tags: ["PATIENT"],
            },
        });
        console.log(res, "data")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};