import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home(){
    const [movies, setMovies] = useState([]);
    const [loading, setloading] = useState(true);
    
    useEffect(() => {
        fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
        )
            .then((response) => response.json())
            .then((json) => {
                setMovies(json.data.movies);
                setloading(false);
            })
    }, []);
    console.log(movies)
    
    return (
        <div>
            <h1>{loading ? "Loading..." : null}</h1>
            {movies.map(movie => 
            <Movie 
                id={movie.id}
                key={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                url={movie.url}
                genres={movie.genres}/>)} 
        </div>
    );
}


export default Home;