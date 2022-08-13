import { useEffect, useState } from 'react';

import './Cards.css';
import Card from './Card/Card';

import { getCards } from '../../services/cards';
import Spinner from '../Spinner/Spinner';

const Cards = () => {
    const [loading, setLoading] = useState(false);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchCards();
    }, []);

    const fetchCards = async () => {
        const cards = await getCards();
        setCards(cards);

        setLoading(false);
    }

    return (
        <>
            {loading
                ? <Spinner />
                :
                <ul className="cards">
                    {cards.length > 0
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
            }
        </>
    );
}

export default Cards;