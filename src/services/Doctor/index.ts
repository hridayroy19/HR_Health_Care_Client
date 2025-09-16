"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { getValidToken } from "@/lib/verifyToken";
import { revalidateTag } from "next/cache";


export const createDoctor = async (payload: any): Promise<any> => {
    const token = await getValidToken();

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/create-doctor`, {
            method: "POST",
            body: payload,
            headers: {
                Authorization: token,
            },
        });
        console.log(res)
        revalidateTag("DOCTOR");

        return res.json();
    } catch (error: any) {
        throw new Error(error.message || "Something went wrong");
    }
};

export const getAllDoctors = async (
    page?: string,
    limit?: string,
    query?: { [key: string]: string | string[] | undefined }
) => {
    const params = new URLSearchParams();

    if (query?.gender) {
        params.append("gender", query.gender.toString());
    }

    if (query?.specialties) {
        params.append("specialties", query.specialties.toString());
    }

    if (query?.rating) {
        params.append("ratings", query.rating.toString());
    }

    if (query?.priceSort) {
        params.append("priceSort", query.priceSort.toString());
    }

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/doctor?limit=${limit}&page=${page}&${params}`,
            {
                next: {
                    tags: ["DOCTOR"],
                },
            }
        );
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

// get single Doctor
export const getSingleDoctors = async (doctorId: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/doctor/${doctorId}`, {
            next: {
                tags: ["DOCTOR"],
            },
        });
        console.log(res, "data")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const deleteDoctor = async (selectedId: string): Promise<any> => {
    const token = await getValidToken();
    console.log(token, "refresh token")

    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/doctor/${selectedId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: token,
                },
            }
        );
        revalidateTag("DOCTOR");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};