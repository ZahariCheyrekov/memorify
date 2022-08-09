import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCard } from '../../services/cards';

import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState({ author: '', title: '', description: '', tags: '', url: '' });


    const handleSubmit = async (ev) => {
        ev.preventDefault();

        createCard(cardData);
        ev.target.reset();

        navigate('/cards');
    }

    const clearForm = (ev) => {
        ev.preventDefault();
        ev.target.parentNode.parentNode.reset();
    }

    return (
        <main className="main__create">
            <form className="main__form" onSubmit={handleSubmit}>
                <legend>Create card</legend>

                <label htmlFor="author" className="main__form--label">Author</label>
                <input id="author" name="author" className="author" type="text" placeholder="John" required onChange={(ev) => setCardData({ ...cardData, author: ev.target.value })} />

                <label htmlFor="title" className="main__form--label">Title</label>
                <input id="title" name="title" className="title" type="text" placeholder="Summer party" required onChange={(ev) => setCardData({ ...cardData, title: ev.target.value })} />

                <label htmlFor="description" className="main__form--label">Description</label>
                <textarea id="description" name="description" className="description" type="text" placeholder="This summer was..." required onChange={(ev) => setCardData({ ...cardData, description: ev.target.value })} />

                <label htmlFor="tags" className="main__form--label">Tags</label>
                <input id="tags" name="tags" className="tags" type="text" placeholder="summer, party, fun" required onChange={(ev) => setCardData({ ...cardData, tags: ev.target.value })} />

                <label htmlFor="url" className="main__form--label">Url</label>
                <input id="url" name="url" className="url" type="file" required onChange={(ev) => setCardData({ ...cardData, url: ev.target.value })} />

                <div className="main__form--buttons">
                    <button className="main__form--add--card" type="submit">Create</button>
                    <button className="main__form--clear--form" onClick={clearForm}>Clear</button>
                </div>
            </form>
        </main>
    );
}

export default Form;