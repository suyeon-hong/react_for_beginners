import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react/cjs/react.development';

export default function Detail() {
    const { id } = useParams();
    const [ movies, setMovies ] = useState([]);

    const getMovie = useCallback(async () =>{
        const json = await(
            await(
                fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            )
        ).json();
        setMovies(json.data.movie);
    }, [id])

    useEffect(()=>{
        getMovie()
    }, [getMovie])
    return(
        <>
            <Link to="/">Home</Link>
            <h1>Detail Page</h1>
            <div>
                <img src={movies.medium_cover_image} alt={movies.title} />
                <p>{movies.description_full}</p>
            </div>
        </>
    )
}