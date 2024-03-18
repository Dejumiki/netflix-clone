const API_KEY = '97996edefd24e0ff4bf6ee6a83745179';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals:  `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: ` /movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: ` /discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=2`,
    fetchRomanceMovies: ` /discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:  `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests;