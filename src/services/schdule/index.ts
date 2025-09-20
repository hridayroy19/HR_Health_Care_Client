"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";

export const createSchdule = async (payload: any): Promise<any> => {
    console.log(payload, "payloadd")

    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;

        if (!token) {
            throw new Error("No access token found");
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/schedule`, {
            method: "POST",
            body: payload,
            headers: {
                Authorization: token,
            },
        });
        console.log(res)
        revalidateTag("schedule");

        return res.json();
    } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
    }
};

//get all Schdule
export const getAllSchdule = async () => {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("accessToken")?.value;
        if (!token) {
            throw new Error("No access token found");
        }
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/schedule`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: token,
            },
            next: {
                tags: ["schedule"],
            },

        }
        );
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};