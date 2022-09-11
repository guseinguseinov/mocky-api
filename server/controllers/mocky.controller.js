import { parse } from "dotenv";
import MockyModel from "../models/Mocky.js";
import UserModel from "../models/User.js";
import generateJson from "../utils/resGen.js";

const mockyCtrl = {
    async addMock(req, res) {
        const { userToken } = req.cookies;

        const user = await UserModel.findOne({ cookieToken: userToken });
        if (!user) return res.status(404).json(generateJson(404, "User not found!", null));

        const { name = null, httpCode, resContentType, charset, httpHeader, httpResBody } = req.body;

        let httpHeaderJson;
        if (httpHeader) {
            httpHeaderJson = JSON.parse(httpHeader);
        }

        let httpResBodyJson;
        if (httpResBody && resContentType == 'application/json') {
            httpResBodyJson = JSON.parse(httpResBody);
        } else {
            httpResBodyJson = httpResBody;
        }


        const newMock = await MockyModel({
            userId: user._id,
            name,
            httpCode,
            resContentType,
            charset,
            httpHeader: httpHeaderJson,
            httpResBody: httpResBodyJson
        });

        await newMock.save();
        res.status(201).json(201, generateJson(201, 'New mock added', null));
    },
    async getMocks(req, res) {
        const { userToken } = req.cookies;

        const user = await UserModel.findOne({ cookieToken: userToken });
        if (!user) return res.status(404).json(generateJson(404, "User not found!", null));

        const mockies = await MockyModel.find({ userId: user._id });

        if (!mockies) return res.status(404).json(generateJson(404, "No mockies found!", null));

        res.status(200).json(generateJson(200, null, mockies));
    },
    async getSingleMock(req, res) {
        const { userToken } = req.cookies;
        const user = await UserModel.findOne({ cookieToken: userToken });
        if (!user) return res.status(404).json(generateJson(404, "User not found!", null));
        let mocky;
        try {
            mocky = await MockyModel.findById(req.params.id);
        }
        catch (error) {
            return res.status(404).json(generateJson(404, "No mocky found!", null))
        }
        res.status(200).json(generateJson(200, null, mocky));


        // if (!mocky) return;

    },
    async getMockUrl(req, res) {
        const mocky = await MockyModel.findOne({ mocksUrl: req.params.mocksUrl });

        if (!mocky) return res.status(404).json(generateJson(404, "No mocky found!", null));

        let resBody = mocky.httpResBody;

        // res.charset = mocky.charset;
        res.status(mocky.httpCode);
        res.set({ ...mocky.httpHeader });
        res.set('Content-Type', `${mocky.resContentType}; charset=${mocky.charset}`)


        if (mocky.charset != 'UTF-8') {
            let jsonBuffer;
            if (mocky.resContentType == 'application/json') {
                let jsonString = JSON.stringify(resBody);
                jsonBuffer = Buffer.from(jsonString, 'latin1');
            } else {
                jsonBuffer = Buffer.from(resBody.content, 'latin1');
            }
            return res.send(jsonBuffer);
        }

        if (mocky.resContentType == 'application/json') {
            return res.json(resBody);
        }

        res.send(resBody.content);
    },
    async editMock(req, res) {
        const { userToken } = req.cookies;
        const user = await UserModel.findOne({ cookieToken: userToken });
        if (!user) return res.status(404).json(generateJson(404, "User not found!", null));

        let { name = null, httpCode, resContentType, charset, httpHeader = null, httpResBody = "" } = req.body;

        if (httpHeader) {
            httpHeader = JSON.parse(httpHeader);
        }

        if (httpResBody && resContentType == 'application/json') {
            httpResBody = JSON.parse(httpResBody);
        } else {
            httpResBody = { content: httpResBody };
        }

        await MockyModel.findByIdAndUpdate(req.params.id, {
            name,
            httpCode,
            resContentType,
            charset,
            httpHeader: httpHeader ? httpHeader : '',
            httpResBody: httpResBody ? httpResBody : '',
        });
        res.status(200).json(generateJson(200, 'Your mock edited', null));

    },
    async deleteMock(req, res) {
        const mocky = await MockyModel.findByIdAndDelete(req.params.id);

        // if (!mocky) return res.status(404).json(generateJson(404, "No mocky found!", null));

        res.status(404).json(generateJson(404, 'Mock deleted successfully!', null));
    }
}

export default mockyCtrl;