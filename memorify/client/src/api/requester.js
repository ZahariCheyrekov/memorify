import axios from 'axios';

import { baseUrl, cardsUrl } from '../constants/urls';

export const fetchCards = () => axios.get(cardsUrl);
export const createCard = (cardData) => axios.post(cardsUrl, cardData);
export const updateCard = (id, cardData) => axios.patch(`${cardsUrl}/${id}`, cardData);
export const likeCard = (id) => axios.patch(`${cardsUrl}/${id}/likeCard`);
export const deleteCard = (id) => axios.delete(`${cardsUrl}/${id}`);

export const signin = (data) => axios.post(`${baseUrl}/user/signin`, data);
export const signup = (data) => axios.post(`${baseUrl}/user/signup`, data);