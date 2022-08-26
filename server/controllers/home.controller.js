import UserModel from "../models/User.js";
import generateJson from "../utils/resGen.js";
import { generateAccessToken } from "../middlewares/auth.js";
import crypto from 'crypto';

const homeCtrl = {
    async getHome(req, res) {
        let userToken;
        if (!req.cookies.userToken) {
            userToken = crypto.randomBytes(64).toString('base64');
            res.cookie('userToken', userToken, {
                // expires: 365 * 20,
                maxAge: 60 * 60 * 24 * 1000 * 365 * 20,
                httpOnly: true,
            });

            const newUser = await UserModel({
                cookieToken: userToken,
            });

            await newUser.save();
        }
        else {
            userToken = req.cookies.userToken;
        }

        res.status(200).json(generateJson(200, null, userToken));
    }
}

export default homeCtrl;