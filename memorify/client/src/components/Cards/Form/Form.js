import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../../../contexts/AuthContext';

import { updateCard } from '../../../api/requester';
import { createCard, getCard } from '../../../services/cards';

import './Form.css';

const Form = ({ id }) => {
    const user = useContext(AuthContext);
    const navigate = useNavigate();
    const [cardData, setCardData] = useState({ title: '', description: '', tags: '', url: '' });

    useEffect(() => {
        if (id) {
            getCardById();
        }
    }, [id]);

    const getCardById = async () => {
        const newCard = await getCard(id);
        setCardData(newCard);
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        if (id) {
            updateCard(id, { ...cardData, createdAt: new Date() });
            navigate(`/memories/${id}`);
        } else {
            createCard({ ...cardData, name: user?.result?.name, creatorId: user?.result?._id });
            navigate('/memories');
        }
    }

    const handleChange = (ev) => {
        setCardData({ ...cardData, [ev.target.name]: ev.target.value })
    }

    const clearData = (ev) => {
        ev.preventDefault();
        ev.target.parentNode.reset();
        setCardData({ title: '', description: '', tags: '', url: '' });
    }

    return (
        <main className="main__create">
            <form className="main__form" onSubmit={handleSubmit}>
                <legend className="main__form--legend">{id ? "Edit" : "Create"} memory</legend>

                <input id="title" name="title" className="title" type="text" placeholder="Title *" value={id && cardData.title} required onChange={handleChange} />

                <textarea id="description" name="description" className="description" type="text" placeholder="Description *" value={id && cardData.description} required onChange={handleChange} />

                <input id="tags" name="tags" className="tags" type="text" placeholder="Tags (comma separated) *" value={id && cardData.tags} required onChange={handleChange} />

                <input id="url" name="url" className="url" type="text" placeholder="Image Url *" value={id && cardData.url} required onChange={handleChange} />

                <button className="main__form--add--card" type="submit">{id ? "EDIT" : "CREATE"}</button>
                <button className="main__form--clear--form" onClick={clearData}>CLEAR</button>
            </form>
        </main>
    );
}
export default Form;