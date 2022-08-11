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
                        creatorId={card.creatorId}
                        createdAt={card.createdAt}
                        description={card.description}
                        likeCount={card.likeCount}
                        url={card.url}
                        tags={card.tags}
                        title={card.title}
                    />
                )
                : ' No cards'
            }
        </ul>
    );
}

export default Cards;