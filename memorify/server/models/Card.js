import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    author: String,
    title: String,
    description: String,
    tags: [String],
    url: String,
    likes: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

const CardSchema = mongoose.model('CardSchema', cardSchema);
export default CardSchema;