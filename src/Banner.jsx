import { useEffect, useState } from 'react';
import './Banner.css' 
import requests from './Requests';
import axios from './Axios'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(requests.fetchPopular);
            setMovie(
                response.data.results[Math.floor(Math.random() * response.data.results.length - 1)]
            );
            return response;
        }
        fetchData();
    }, [])

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + "..." : string; 
    }

    return (
        <div className='banner' style={{
            backgroundSize: "cover", // sets the size of the element's background image
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, // link to obtain image of cover page of an movie from tmdb. backdrop_path is a property of the object movie
            backgroundPosition: "center" // sets the initial position for each background image
        }}>
            <div className='banner_contents'>
                <h1 className="banner_title">
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className="banner_btns">
                    <button className='banner_btn'>Play</button>
                    <button className='banner_btn'>My List</button>
                </div>
                <h1 className="banner_description">{truncate(movie?.overview, 225)}</h1>
            </div>
            <div className='banner_fadeBottom'></div>
        </div>
    )
}

export default Banner