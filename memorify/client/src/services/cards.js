import * as api from '../api/requester';

export const getCards = async () => {
    try {
        const { data } = await api.fetchCards();
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const createCard = async (card) => {
    try {
        const { data } = await api.createCard(card);
        return data;
    } catch (error) {
        console.log(error);
    }
}