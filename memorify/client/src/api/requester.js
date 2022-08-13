import axios from 'axios';

import { baseUrl, cardsUrl } from '../constants/url';
import { getToken, getUser } from '../utils/localStorage';

const API = axios.create({ baseURL: baseUrl });

API.interceptors.request.use((req) => {
    const user = getUser();

    if (user) {
        const userToken = getToken();
        req.headers.authorization = `Bearer ${userToken}`;
    }
    return req;
});

export const fetchCards = () => API.get(cardsUrl);
export const fetchCard = (id) => API.get(`/memories/${id}`);
export const createCard = (cardData) => API.post('/memories', cardData);
export const updateCard = (id, cardData) => API.patch(`/memories/${id}`, cardData);
export const likeCard = (id) => API.patch(`/memories/${id}/likeCard`);
export const postComment = (id, comment) => API.patch(`/memories/${id}/comments`, { comment });
export const deleteCard = (id, navigate) => API.delete(`/memories/${id}`).then(() => navigate('/memories'));

export const signin = (data) => API.post(`/user/signin`, data);
export const signup = (data) => API.post(`/user/signup`, data);