import * as api from '../api/requester';

export const getCard = async (id) => {
    try {
        const { data } = await api.fetchCard(id);
        return data;
    } catch (error) {
        console.log(error);
    }
}

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

export const likeCard = async (likid) => {
    try {
        const { data } = await api.likeCard(likid);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const postComment = async (id, comment) => {
    try {
        const { data } = await api.postComment(id, comment);
        return data;
    } catch (error) {
        console.log(error);
    }
}