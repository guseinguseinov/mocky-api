import mongoose from 'mongoose';
import crypto from "crypto";

// validation funtion
function checkResContent() {
    const resContentType = [
        'application/json',
        'application/x-www-form-urlencoded',
        'application/xhtml+xml',
        'application/xml',
        'multipart/form-data',
        'text/css',
        'text/csv',
        'text/html',
        'text/json',
        'text/plain',
        'text/xml'
    ];

    if (resContentType.indexOf(this.resContentType) > -1) {
        return true;
    }
    return false;
}

function bodyValidator() {
    if (this.resContentType != 'application/json') {
        this.httpResBody = {
            content: this.httpResBody
        }
    }
}

const MockySchema = new mongoose.Schema({
    userId: {
        type: "ObjectId",
        ref: "users",
    },
    name: String,
    mocksUrl: {
        type: String,
        default: () => crypto.randomBytes(64).toString('base64url')
    },
    httpCode: {
        type: Number, // ask if enum needed
        required: [true, 'HTTP Code is required!']
    },
    resContentType: {
        type: String,
        validate: {
            validator: checkResContent,
            message: props => `This Response Content Type: ${props.value} is not valid!`,
        },
        required: [true, 'Response Content Type required'],
    },
    charset: {
        type: String,
        enum: {
            values: ["UTF-8", "UTF-16", "ISO-8859-1"],
            message: '{VALUE} is not supported'
        },
        default: "UTF-8",
    },
    httpHeader: {
        type: Object,
        default: () => { }, // ask if needed
    },
    httpResBody: {
        type: Object,
        validate: {
            validator: bodyValidator,
            message: props => `This is invalid!`,
        },
        default: () => { }, // ask if needed
    },
    // ask if secret token or mock identifier needed
}, {
    timestamps: true,
});

const MockyModel = mongoose.model('mockies', MockySchema);

export default MockyModel;