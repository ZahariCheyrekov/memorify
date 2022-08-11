import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createCard } from '../../services/cards';

import './Form.css';

const Form = () => {
    const navigate = useNavigate();
    const [cardData, setCardData] = useState({ title: '', description: '', tags: '', url: '' });
    const user = JSON.parse(localStorage.getItem('user'));

    const handleSubmit = async (ev) => {
        ev.preventDefault();

        createCard({ ...cardData, name: user?.result?.name, creatorId: user?.result?._id });
        ev.target.reset();

        navigate('/memories');
    }

    const handleChange = (ev) => {
        setCardData({ ...cardData, [ev.target.name]: ev.target.value })
    }

    const clearForm = (ev) => {
        ev.preventDefault();
        ev.target.parentNode.reset();
    }

    return (
        <main className="main__create">
            <form className="main__form" onSubmit={handleSubmit}>
                <legend className="main__form--legend">Create memory</legend>

                {/* <input id="author" name="author" className="author" type="text" placeholder="Author *" required onChange={handleChange} /> */}

                <input id="title" name="title" className="title" type="text" placeholder="Title *" required onChange={handleChange} />

                <textarea id="description" name="description" className="description" type="text" placeholder="Description *" required onChange={handleChange} />

                <input id="tags" name="tags" className="tags" type="text" placeholder="Tags (comma separated) *" required onChange={handleChange} />

                <input id="url" name="url" className="url" type="text" placeholder="Image Url *" required onChange={handleChange} />

                <button className="main__form--add--card" type="submit">CREATE</button>
                <button className="main__form--clear--form" onClick={clearForm}>CLEAR</button>
            </form>
        </main>
    );
}

export default Form;