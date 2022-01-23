import { PropTypes } from 'prop-types';
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export default function Movie({ id, coverImg, title, summary, genres}) {
    return (
        <div className={styles.listBox}>
            <img className={styles.coverImg} src={coverImg} alt={title} />
            <Link className={styles.title} to={`/detail/${id}`}>{title}</Link>
            <p className={styles.description}>{summary}</p>
            <ul className={styles.flexBox}>
            {
                genres.map((genre, index) => (
                    <li key={index} style={{fontSize: "14px", marginRight: "5px", color: "#888"}}>{genre}</li>
                ))
            }
            </ul>
        </div>
    )
}

Movie.propTypes = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}