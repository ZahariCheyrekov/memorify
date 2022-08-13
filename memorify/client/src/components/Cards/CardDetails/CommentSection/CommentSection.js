import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { postComment } from '../../../../api/requester';

import { AuthContext } from '../../../../contexts/AuthContext';
import { getCard } from '../../../../services/cards';

import './CommentSection.css';

const CommentSection = () => {
    const user = useContext(AuthContext);
    const { id } = useParams();
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        getComments();
    }, []);

    const getComments = async () => {
        const card = await getCard(id);
        setComments(card.comments);
    }

    const handleComment = async (ev) => {
        ev.preventDefault();
        setComment('');
        ev.target.reset();

        const userComment = `${user?.result?.name}: ${comment}`;
        const data = await postComment(id, userComment);
        const allComments = data.data.comments;
        setComments([...allComments]);
    }

    return (
        <section className="section__comment--section">
            <h2 className="section__comment--title">
                Comment section
            </h2>
            <section className="section__comments">
                <ul className="section__ul--comments">
                    {comments.length > 0
                        ? comments.map((comment, i) =>
                            <li
                                key={i}
                                id={i}
                                className="ul__comment-el"
                            >
                                {comment}
                            </li>
                        )
                        : <h1>No Comments</h1>
                    }
                </ul>
            </section>
            <form className="form__comment--form" onSubmit={handleComment}>
                <input id="comment"
                    name="comment"
                    className="comment"
                    type="text"
                    placeholder="Comment"
                    required
                    onChange={(e) => setComment(e.target.value)}
                />
                <button className="form__comment--button" type="submit">
                    POST
                </button>
            </form>
        </section>
    );
}

export default CommentSection;