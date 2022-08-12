import { useParams } from 'react-router-dom';

import Form from '../Form/Form';

const EditCard = () => {
    const { id } = useParams();

    return (
        <Form id={id} />
    );
}

export default EditCard;