import { useEffect, useState } from 'react';

import './Cards.css';
import Card from './Card/Card';

import { getCards } from '../../services/cards';

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const cards = await getCards();
        setCards(cards);
    }

    return (
        <ul className="cards">
            {cards
                ? cards.map(card =>
                    <Card
                        key={card._id}
                        id={card._id}
                        name={card.name}
                        createdAt={card.createdAt}
                        url={card.url}
                        tags={card.tags}
                        title={card.title}
                    />
                )
                : <h1>No cards</h1>
            }
        </ul>
    );
}

export default Cards;