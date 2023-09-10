import { Schema, model, models } from 'mongoose';

const reportSchema = new Schema({
    userId: String,
    date: String,
    time: String,
    sentimentType: {
        type: String,
        required: true,
        enum: ["audio", "chat"]
    },
    result: Object
}, {
    timestamps: true
})

const Reports = models.report || model('report', reportSchema);
