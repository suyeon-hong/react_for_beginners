import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";

export default function Movie({ id, coverImg, title, summary, genres}) {
    return (
        <>
            <img src={coverImg} alt={title} />
            <Link to={`/detail/${id}`}>{title}</Link>
            <p>{summary}</p>
            <ul>
            {
                genres.map((genre, index) => (
                    <li key={index}>{genre}</li>
                ))
            }
            </ul>
        </>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}