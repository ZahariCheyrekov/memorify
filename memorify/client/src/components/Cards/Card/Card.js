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
            <article className="card__img--article">
                <img src={url} alt="memory" />
            </article>

            <div className="card__info">
                <h2 className="card__title">
                    {title}
                </h2>
                <h2 className="card__author">
                    {author}
                </h2>
                <p className="card__content">
                    {tags}
                </p>

            </div>
        </li>
    );
}

export default Card;