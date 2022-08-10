import mongoose from 'mongoose';
import CardSchema from '../models/Card.js';

export const getCard = async (req, res) => {
    const { id } = req.params;

    try {
        const card = await CardSchema.findById(id);
        res.status(200).json(card);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

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

export const updateCard = async (req, res) => {
    const { id: _id } = req.params;
    const card = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`Unable to find card with id: ${_id}`);
    }

    const updatedCard = await CardSchema.findByIdAndUpdate(_id, card, { new: true });
    res.json(updatedCard);
}

export const deleteCard = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No card with id: ${id}`);
        }

        await CardSchema.findByIdAndRemove(id);

        res.json({ message: 'Card was deleted successfully.' });

    } catch (error) {
        res.status().json({});
    }
}