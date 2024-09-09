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
