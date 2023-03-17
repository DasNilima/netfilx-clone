const API_KEY = "421a5481ad4c169df4bc01ae5874d45e"

const requests = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/movie/popular?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUpcomingMovies: `/movie/upcoming?api_key=${API_KEY}&language=en-US`,
    fetchTvShows: `/tv/popular?api_key=${API_KEY}&language=en-US`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    };
    
export default requests;
    


