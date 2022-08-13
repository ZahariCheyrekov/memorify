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
        <section>
            <h2>
                Comment section
            </h2>
            <section>
                <ul>
                    {comments.length > 0 && (
                        comments.map((comment, i) =>
                            <li
                                key={i}
                                id={i}
                            >
                                {comment}
                            </li>
                        ))
                    }
                </ul>
            </section>
            <form onSubmit={handleComment}>
                <input id="comment"
                    name="comment"
                    className="comment"
                    type="text"
                    placeholder="Comment"
                    required
                    onChange={(e) => setComment(e.target.value)}
                />
                <button type="submit">
                    Post comment
                </button>
            </form>
        </section>
    );
}

export default CommentSection;