import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    cookieToken: {
        type: String,
        required: [true, 'User Cookie Token required'],
    }
}, {
    timestamps: true,
});

const UserModel = mongoose.model('users', UserSchema);

export default UserModel;