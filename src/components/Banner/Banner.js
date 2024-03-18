import React, { useEffect, useState } from 'react';
import axios from '../../constants/axios';
import requests from '../../constants/requests'
import './banner.css'

function Banner() {
    const [movie, setMovie] =useState({});

    useEffect(() => {
        (
            async () => {
                try {
                const request =     await axios.get(requests.fetchNetflixOriginals);
                // console.log(request.data.results);
                setMovie(
                    request.data.results[
                        Math.floor(Math.random() * request.data.results.length)
                    ]
                );
                // console.log(setMovie);
                } catch (error) {
                    console.log(`Error`, error);
                }
            }
        )();
    },[])

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
  return (
<>

    <div className='banner'
    style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
    }}
    
    >
       <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 100)}
        </h1>
      </div>

        
    </div>
    </>
  )
}

export default Banner