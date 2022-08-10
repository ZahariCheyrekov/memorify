import express from 'express';

import auth from '../middlewares/auth.js';
import { createCard, getCards, updateCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/', auth, createCard);
// router.get('/:id', getCard);
router.patch('/:id', auth, updateCard);
// router.delete('/:id', auth, deleteCard);
// router.patch('/:id/likeCard', auth, likeCard);

export default router;