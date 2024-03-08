import { useEffect, useState } from "react"
import axios from "./Axios";
import "./Row.css"

export default function Row({title, fetchUrl, isLarge = false}) {

    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/";

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);
            return response
        }
        fetchData();
    }, [fetchUrl])


    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies?.map((movie) => ((isLarge && movie.poster_path) || (!isLarge && movie.backdrop_path)) && (
                    <img src={`${base_url}${ isLarge ? movie.poster_path : movie.backdrop_path}`} className={`row_poster ${isLarge && "row_posterLarge"}`} alt={`${movie.name}`} key={movie.id}></img>
                ))}
            </div>
        </div>
    )
}