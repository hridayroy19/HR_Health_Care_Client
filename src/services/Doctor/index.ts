"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

export const getAllDoctors = async () => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/doctor`,
            {
                next: {
                    tags: ["DOCTOR"],
                },
            }
        );
        const data = await res.json();
        // console.log(data.data)
        return data;
    } catch (error: any) {
        return Error(error.message);
    }
};