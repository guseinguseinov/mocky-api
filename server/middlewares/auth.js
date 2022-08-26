import * as jose from 'jose';
import { config } from 'dotenv';
import generateJson from '../utils/resGen.js';

config();
const jwtSecterKey = process.env.JWT_SECRET_KEY;

export const generateAccessToken = async (data) => {
    const token = await new jose.SignJWT(data)
        .setExpirationTime('365d')
        .setProtectedHeader({ alg: 'ES256' })
        .sign(jwtSecterKey);

    return token;
}

export const authenticateToken = async (req, res, next) => {
    if (!req.cookies.userToken) {
        return res.status(404).json(generateJson(404, 'User not found!', null));
    }
    next();
}