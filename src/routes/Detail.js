import { useEffect, useState } from 'react';
import { json, useParams } from 'react-router-dom';

function Detail() {
    const { id } = useParams(); 
    const [PageMovies, setPageMovies] = useState([]);
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setPageMovies(json.data.movie);
    };
    useEffect(() => {
        getMovie();
    }, []);
    

    return (
        <div>
            <h1>{PageMovies.title}</h1>
            <h3>Movie ID : {id}</h3>
        </div>
    )
}

export default Detail;