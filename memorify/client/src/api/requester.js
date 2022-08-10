import axios from 'axios';

import { baseUrl, cardsUrl } from '../constants/urls';

export const fetchCards = () => axios.get(cardsUrl);
export const createCard = (cardData) => axios.post(cardsUrl, cardData);
export const updateCard = (id, cardData) => axios.patch(`${baseUrl}/${id}`, cardData);
export const likeCard = (id) => axios.patch(`${baseUrl}/${id}/likeCard`);
export const deleteCard = (id) => axios.delete(`${baseUrl}/${id}`);

export const signin = (data) => axios.post(`/users/sigin`, data);
export const signup = (data) => axios.post(`/users/signup`, data);