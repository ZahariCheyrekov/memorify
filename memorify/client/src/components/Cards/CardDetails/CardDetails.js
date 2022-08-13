import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import './CardDetails.css';

import { getCard } from '../../../services/cards';
import { deleteCard, likeCard } from '../../../api/requester';
import { AuthContext } from '../../../contexts/AuthContext';
import CommentSection from './CommentSection/CommentSection';

const CardDetails = () => {
    const navigate = useNavigate();
    const user = useContext(AuthContext);
    const { id } = useParams();
    const [card, setCard] = useState({});
    const [tags, setTags] = useState([]);
    const [likes, setLikes] = useState([]);
    const isOwner = user?.result?._id === card.creatorId;

    useEffect(() => {
        fetchCard();
    }, []);

    const fetchCard = async () => {
        const card = await getCard(id);

        setTags(card.tags[0].split(/,\s+/));
        setLikes(card.likes);
        setCard(card);
    }

    const handleLike = async () => {
        const data = await likeCard(id);
        const allLikes = data.data.likes;
        setLikes([...allLikes]);
    }

    return (
        <main className="main__card--details">
            <section className="main__section">
                <div className="section__card--details">
                    <h1 className="section__card--title">
                        {card.title}
                    </h1>
                    <div className="section__card--author">
                        <strong>Created by:&nbsp;</strong> {card.name}&nbsp;/&nbsp;

                        <p className="section__card--createdat">
                            {new Date(card.createdAt).toDateString()}
                        </p>
                    </div>
                    <p className="section__card--tags">
                        <strong>Tags:</strong>
                        &nbsp;
                        <span className="section__card--span--tags">
                            {tags &&
                                tags.map(tag =>
                                    <span id={tag} key={tag}>#{tag}
                                        &nbsp;
                                    </span>
                                )}
                        </span>
                    </p>
                    <p className="section__card--description">
                        {card.description}
                    </p>
                </div>

                <article className="section__article--img">
                    <img src={card.url} alt="memory" />
                </article>

                <section className="section__aside--actions">
                    <i className={isOwner ? 'fa-solid fa-heart owner' : 'fa-solid fa-heart'} onClick={() => {
                        if (!isOwner) {
                            handleLike();
                        }
                    }}>
                        &nbsp;
                        <span className="card__likes--span">
                            {likes.length}
                        </span>
                    </i>
                    {isOwner && (
                        <>
                            <Link to={`/memories/${id}/edit`}>
                                <i className="fa-solid fa-pen-to-square"></i>
                            </Link>
                            <i className="fa-solid fa-trash" onClick={() => deleteCard(id, navigate)}></i>
                        </>
                    )}
                </section>
            </section>

            <CommentSection />
        </main >
    );
}

export default CardDetails;