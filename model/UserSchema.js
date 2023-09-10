import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    role: {
        type: String,
        required: true,
        default: "rookie",
        enum: ["rookie", "manager"]
    }
}, {
    timestamps: true
})

const Users = models.user || model('user', userSchema);

export default Users;