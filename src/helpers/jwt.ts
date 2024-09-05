import jwt from 'jsonwebtoken';
import * as jose from 'jose'

const SECRET_KEY = process.env.SECRET_KEY_JWT as string

export function signToken(data: object) {
    return jwt.sign(data, SECRET_KEY);
}

export function verifyToken(token: string) {
    return jwt.verify(token, SECRET_KEY)
}

export async function verifyTokenJose<T>(token: string) {
    const secret = new TextEncoder().encode(SECRET_KEY);
    const { payload } = await jose.jwtVerify<T>(token, secret);
    return payload;
}
