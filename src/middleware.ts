import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { verifyTokenJose } from "./helpers/jwt";

// Nanti dilengkapi di bagian protected
const protectedRoutes = ["/discover", "/nusa-recipes", "/events", "/profile", "/your-chef"];
const publicRoutes = ["/login", "/signup"];

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname;
    const isProtectedRoute = protectedRoutes.includes(path);
    const isPublicRoute = publicRoutes.includes(path);

    console.log("masuk middleware");
    const auth = cookies().get("Authorization");
    console.log(auth, "auth>>>");

    if (isProtectedRoute && !auth) {
        return NextResponse.redirect(new URL("/login", request.url));
    }
    if (isPublicRoute && auth) {
        return NextResponse.redirect(new URL("/", request.url));
    }

    if (isProtectedRoute) {
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

        // console.log(token, 'token middleware>>')
        const decodeToken = await verifyTokenJose<{
            email: string;
            _id: string;
        }>(token);
        console.log(decodeToken, 'decodedtoken middleware >>>')

        const requestHeaders = new Headers(request.headers);

        const response = NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        });

        // const response = NextResponse.next();

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
        response.headers.set("Access-Control-Expose-Headers", "x-id, x-email");

        // console.log(response, 'response middleware>>>>>')

        return response;
    }
}

export const config = {
    matcher: ["/discover", "/nusa-recipes", "/events", "/profile", "/your-chef"],
};
