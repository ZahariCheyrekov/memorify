import axios from 'axios';

import { cardsUrl } from '../constants/urls';

export const fetchCards = () => axios.get(cardsUrl);
export const createCard = (cardData) => axios.post(cardsUrl, cardData);