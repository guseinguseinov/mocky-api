import UserModel from "../models/User.js";
import generateJson from "../utils/resGen.js";
import crypto from 'crypto';

const homeCtrl = {
    async getHome(req, res) {
        let { userToken = null } = req.cookies;
        console.log(userToken);
        if (!userToken) {
            userToken = crypto.randomBytes(64).toString('base64');
            res.cookie('userToken', userToken, {
                // expires: 365 * 20,
                maxAge: 60 * 60 * 24 * 1000 * 365 * 20,
            });

            const newUser = await UserModel({
                cookieToken: userToken,
            });

            await newUser.save();
        }
        else {
            const user = await UserModel.findOne({ cookieToken: userToken });
            if (!user) {
                userToken = crypto.randomBytes(64).toString('base64');
                res.cookie('userToken', userToken, {
                    // expires: 365 * 20,
                    maxAge: 60 * 60 * 24 * 1000 * 365 * 20,
                });

                const newUser = await UserModel({
                    cookieToken: userToken,
                });

                await newUser.save();
            }
        }
        res.status(200).json(generateJson(200, null, userToken));
    }
}

export default homeCtrl;