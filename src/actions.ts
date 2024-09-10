"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


export default async function revalidate() {
    revalidatePath('/', 'layout')
}

export async function logout() {
    cookies().set("Authorization", `Bearer`, {
        domain: process.env.DOMAIN,
        httpOnly: false,
        path: "/",
        expires: new Date(),
    });
}

