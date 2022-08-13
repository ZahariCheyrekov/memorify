import { Link } from 'react-router-dom';

import './Card.css';

const Card = ({ id,
    name,
    createdAt,
    url,
    tags,
    title
}) => {
    return (
        <Link to={`/memories/${id}`}>
            <li
                id={id}
                className="cards__card"
            >
                <article className="card__img--article">
                    <img src={url} alt="memory" />
                </article>

                <div className="card__info">
                    <h2 className="card__title">
                        {title}
                    </h2>
                    <h2 className="card__author">
                        {name}
                    </h2>
                    <p className="card__content">
                        {tags}
                    </p>
                    <p className="card__createdAt">
                        {new Date(createdAt).toDateString()}
                    </p>
                </div>
            </li>
        </Link>
    );
}

export default Card;