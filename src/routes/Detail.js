import { useParams, Link } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react/cjs/react.development';

export default function Detail() {
    const { id } = useParams();
    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const getMovie = useCallback(async () =>{
        const json = await(
            await(
                fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            )
        ).json()
        setMovies(json.data.movie);
        setLoading(false);
    }, [id])

    useEffect(()=>{
        getMovie()
    }, [getMovie])
    return(
        <>
            <Link to="/" style={{font: "bold 16px/1 arial", color: "tomato"}}>HOME</Link>
            <h1 style={{font: "bold 20px/1 arial", color: "#000"}}>Detail Page</h1>
            {loading ? "Loading..." : <div>
                <img src={movies.medium_cover_image} alt={movies.title} />
                <p>{movies.description_full}</p>
            </div>}
            
        </>
    )
}