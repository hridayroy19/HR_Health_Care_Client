"use server";

import { revalidateTag } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */


export const createPatient = async (payload: any): Promise<any> => {
    // const token = await getValidToken();

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/create-patient`, {
            method: "POST",
            body: payload,
        });
        console.log(res)
        revalidateTag("DOCTOR");

        return res.json();
    } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
    }
};

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

//get all categories
export const getByIdPatient = async (id:string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/patient/${id}`, {
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