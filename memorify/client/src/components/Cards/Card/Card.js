import { Link } from 'react-router-dom';

import './Card.css';
import { deleteCard } from '../../../api/requester';

const Card = ({ id,
    name,
    creatorId,
    createdAt,
    description,
    likeCount,
    url,
    tags,
    title
}) => {
    const userId = JSON.parse(localStorage.getItem('user')).result._id;
    const hasDelete = userId === creatorId;

    const handleDelete = () => {
        deleteCard(id);
    }
    
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
                        {createdAt}
                    </p>

                    {hasDelete &&
                        <button className="card__button--delete" onClick={handleDelete}>
                            Delete
                        </button>
                    }
                </div>
            </li>
        </Link>
    );
}

export default Card;