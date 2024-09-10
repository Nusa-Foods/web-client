import jwt from "jsonwebtoken";
import * as jose from "jose";

const SECRET_KEY = (process.env.SECRET_KEY_JWT as string) ?? "rahasia";

export function signToken(data: object) {
    return jwt.sign(data, SECRET_KEY);
}

export async function verifyTokenJose<T>(token: string) {
    const secret = await new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jose.jwtVerify<T>(token, secret);
    return payload._id as string;

}

export async function decode(auth: string) {
    const [Bearer, token] = auth.split(" ");
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

    return decodeToken

}