import { useState } from 'react';
import { createCard } from '../../services/cards';

const Form = () => {
    const [cardData, setCardData] = useState({ author: '', title: '', description: '', tags: '', selectedFile: '' });

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        createCard(cardData);
    }

    const clearForm = (ev) => {
        ev.preventDefault();
        ev.target.parentNode.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <legend>Add Album</legend>

            <label htmlFor="author" className="vhide">Author</label>
            <input id="author" name="author" className="author" type="text" placeholder="Author" onChange={(ev) => setCardData({ ...cardData, author: ev.target.value })} />

            <label htmlFor="title" className="vhide">Title</label>
            <input id="title" name="title" className="title" type="text" placeholder="Title" onChange={(ev) => setCardData({ ...cardData, title: ev.target.value })} />

            <label htmlFor="description" className="vhide">Description</label>
            <textarea id="description" name="description" className="description" type="text" placeholder="Description" onChange={(ev) => setCardData({ ...cardData, description: ev.target.value })} />

            <label htmlFor="tags" className="vhide">Tags</label>
            <input id="tags" name="tags" className="tags" type="text" placeholder="Tags" onChange={(ev) => setCardData({ ...cardData, tags: ev.target.value })} />

            <input id="file" name="file" className="file" type="file" accept="Image/*" onChange={(ev) => setCardData({ ...cardData, selectedFile: ev.target.value })} />

            <button className="add-card" type="submit">Create card</button>
            <button className="clear-form" onClick={clearForm}>Clear</button>
        </form>
    );
}

export default Form;