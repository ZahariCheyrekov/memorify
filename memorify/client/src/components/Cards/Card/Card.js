const Card = ({ id,
    author,
    createdAt,
    description,
    likeCount,
    selectedFile,
    tags,
    title
}) => {

    return (
        <li
            id={id}
        >
            <img src={selectedFile} alt="memory" />
            <h2>{author}</h2>
            <p>{tags}</p>
            <h2>{title}</h2>
        </li>
    );
}

export default Card;