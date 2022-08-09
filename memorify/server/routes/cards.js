import express from 'express';

import { createCard, getCards, updateCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.patch('/:id', updateCard);

export default router;