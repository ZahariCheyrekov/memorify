import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './CardDetails.css';
import { getCard } from '../../../services/cards';

const CardDetails = () => {
    const [card, setCard] = useState({});
    const [tags, setTags] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getCardById();
    }, []);

    const getCardById = async () => {
        const card = await getCard(id);
        setTags(card.tags[0].split(', '));

        setCard(card);
    }

    return (
        <main className="main__card--details">
            <section className="main__section">
                <div className="section__card--details">
                    <h1 className="section__card--title">
                        {card.title}
                    </h1>

                    <span className="section__card--author">
                        Created by: {card.name}
                    </span>

                    <p className="section__card--tags">
                        Tags:
                        &nbsp;
                        {tags &&
                            tags.map(tag =>
                                <span id={tag} key={tag}>#{tag}
                                    &nbsp;
                                </span>)
                        }
                    </p>

                    <p className="section__card--description">
                        {card.description};
                    </p>
                </div>

                <article className="section__article--img">
                    <img src={card.url} alt="memory" />
                </article>
            </section>
        </main>
    );
}

export default CardDetails;