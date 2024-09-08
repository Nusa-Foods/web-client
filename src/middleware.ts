import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyTokenJose } from "./helpers/jwt";

// Nanti dilengkapi di bagian protected
const protectedRoutes = ["/discover"];
const publicRoutes = ["/login", "/signup", "/"];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    const auth = cookies().get("Authorization");

    if (isProtectedRoute && !auth) {
        return NextResponse.redirect(new URL("/login", request.url));
    }

    if (request.nextUrl.pathname.startsWith("/discover")) {
        if (!auth)
            return Response.json(
                { msg: "Authentication Failed" },
                { status: 401 }
            );
        const [Bearer, token] = auth.value.split(" ");
        if (Bearer !== "Bearer")
            return Response.json(
                { msg: "Authentication Failed" },
                { status: 401 }
            );
        if (!token)
            return Response.json(
                { msg: "Authentication Failed" },
                { status: 401 }
            );

        const decodeToken = await verifyTokenJose<{
            email: string;
            _id: string;
        }>(token);

        const requestHeaders = new Headers(request.headers);

        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

        // response.headers.set('x-id', decodeToken._id)
        // response.headers.set('x-email', decodeToken.email)

        response.headers.set(
            "Access-Control-Allow-Origin",
            "http://localhost:3001"
        );
        response.headers.set("Access-Control-Allow-Credentials", "true");
        response.headers.set(
            "Access-Control-Allow-Headers",
            "Authorization, Content-Type"
        );

        return response;
    }
}

export const config = {
    matcher: ["/discover"],
};
