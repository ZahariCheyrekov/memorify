import CardSchema from '../models/Card.js';

export const getCards = async (req, res) => {
    try {
        const cards = await CardSchema.find();
        console.log(cards);
        res.status(200).json(cards);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createCard = async (req, res) => {
    const card = req.body;
    const newCard = new CardSchema(card);

    try {
        await newCard.save();
        res.status(201).json(newCard);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}