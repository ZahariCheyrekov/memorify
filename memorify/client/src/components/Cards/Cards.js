import { useEffect, useState } from 'react';

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
            {cards ?
                cards.map(card =>
                    <Card
                        key={card._id}
                        id={card._id}
                        author={card.author}
                        createdAt={card.createdAt}
                        description={card.description}
                        likeCount={card.likeCount}
                        selectedFile={card.selectedFile}
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