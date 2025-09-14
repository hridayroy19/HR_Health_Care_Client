"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";

import { FieldValues } from "react-hook-form";

export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
      (await cookies()).set("refreshToken", result.data.refreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};


export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("accessToken")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};

export const logout = async () => {
  (await cookies()).delete("accessToken");
};


// export const getNewToken = async () => {
//   try {

//      const cookieStore = await cookies(); // don't await here if in server component
//     const token = cookieStore.get("refreshToken")?.value;
//  console.log(token)
//     if (!token) throw new Error("No refresh token found");

//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: token ,
//           credentials: "include", 
//         },
//       }
//     );
//     console.log(res)
//     return res.json();
//   } catch (error: any) {
//     return Error(error);
//   }
// };


// export const getNewToken = async () => {

//   try {
//       const token = (await cookies()).get("refreshToken")?.value;

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`, {
//       method: "POST",
//         credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//        Authorization:token ?? "",
//       },
//     });

//     return res.json();
//   } catch (err: any) {
//     return { success: false, message: err.message };
//   }
// };


export const getNewToken = async () => {
  try {

    const cookieStore = await cookies();
    const token = cookieStore.get("refreshToken")!.value;
    console.log(token,"কুকি পাঠানোর জন্য দরকার")

    if (!token) {
      throw new Error("No refresh token found in cookies");
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/refresh-token`, {
      method: "POST",
      credentials: "include", // কুকি পাঠানোর জন্য দরকার
      headers: {
        "Content-Type": "application/json",
        Authorization:`${token}`,
      },
    });

    return res.json();
  } catch (err: any) {
    return { success: false, message: err.message };
  }
};





export const forgetPassword = async (payload: FieldValues) => {
  console.log(payload, "data")
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/forgot-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const resetPassword = async (payload: { id: string; password: string; token: string }) => {
  try {

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/reset-password`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: payload.token,
        },
        body: JSON.stringify({ id: payload.id, password: payload.password }),
      }

    );
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

// export const getMyProfile = async () => {
//   const token = await getValidToken()
//   console.log(token,"ddddddddd")
//   try {
//     // const cookieStore = await cookies(); // ✅ সিঙ্ক্রোনাস
//     // const token = cookieStore.get("refreshToken")?.value; // accessToken নেওয়া হচ্ছে

//     if (!token) {
//       throw new Error("No access token found");
//     }

//     const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/user/me`, {
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: token, // ✅ সঠিক header
//       },
//       cache: "no-store",
//     });

//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching profile:", error);
//     throw error;
//   }
// };
