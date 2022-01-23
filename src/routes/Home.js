import { useState, useEffect } from 'react/cjs/react.development';
import Movie from '../components/Movie';

function Home() {
    const [ loading, setLoading ] = useState(true);
    const [ movies, setMovies] = useState([]);

    const getMovies = async () => {
        const json = await (
            await fetch(
            'https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year'
            )
        ).json();
        setMovies(json.data.movies);
        setLoading(false);
    }

    useEffect(()=> {
        getMovies();
    }, []);

    return(
        <div style={{width: "100%", display: "flex", flexWrap: "wrap", justifyContent:"space-between"}}>
            {loading ? "Loading..." : movies.map((movie) => (
            <Movie 
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                year={movie.year}
                summary={movie.summary.length > 320 ? `${movie.summary.slice(0, 320)}...` : movie.summary }
                genres={movie.genres}
            />
            ))}
        </div>
    )
}

export default Home;