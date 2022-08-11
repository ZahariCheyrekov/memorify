import mongoose from 'mongoose';

const cardSchema = mongoose.Schema({
    title: String,
    description: String,
    name: String,
    creator: String,
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