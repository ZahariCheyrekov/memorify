import { useEffect, useState } from 'react';
import { getCards } from '../../services/cards';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        const fetchCards = async () => {
            const cards = await getCards();
            setCards(cards);
        }

        fetchCards();
        console.log(cards);
    }, []);

    return (
        <>
        </>
    );
}

export default Cards;