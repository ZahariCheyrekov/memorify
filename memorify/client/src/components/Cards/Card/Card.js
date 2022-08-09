import './Card.css';

const Card = ({ id,
    author,
    createdAt,
    description,
    likeCount,
    url,
    tags,
    title
}) => {

    return (
        <li
            id={id}
            className="cards__card"
        >
            <img src={url} alt="memory" />
            <h2 className="card__author">
                {author}
            </h2>
            <p className="card__content">
                {tags}
            </p>
            <h2 className="card__title">
                {title}
            </h2>
        </li>
    );
}

export default Card;