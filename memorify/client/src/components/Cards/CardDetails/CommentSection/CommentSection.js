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

    const getComments = useCallback(async () => {
        const card = await getCard(id);
        setComments(card.comments);
    }, [comments]);

    useEffect(() => {
        getComments();
    }, []);

    const handleComment = (ev) => {
        ev.preventDefault();
        ev.target.parentNode.reset();
        setComment('');

        const userComment = `${user?.result?.name}: ${comment}`;
        postComment(id, userComment);
    }

    return (
        <section>
            <h2>
                Comment section
            </h2>
            <form>
                <input id="comment"
                    name="comment"
                    className="comment"
                    type="text"
                    placeholder="Comment"
                    required
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleComment}>
                    Post comment
                </button>
            </form>
            <section>
                <ul>
                    {comments.length > 0 && (
                        comments.map(comment =>
                            <li
                                key={comment}
                            >
                                {comment}
                            </li>
                        ))
                    }
                </ul>
            </section>
        </section>
    )
}

export default CommentSection;