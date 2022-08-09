import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CardSchema = mongoose.model('CardSchema', cardSchema);
export default CardSchema;