const API_KEY = "5fdbbdadf89111b85a1e09b51393c754";

const getMovies = async apiURL => {
	try {
		const res = await fetch(apiURL, {
			method: "GET",
		});
		const resJson = await res.json();
		return resJson;
	} catch (error) {
		console.log(error);
	}
}

const getMovieGenres = async () => {
	const apiURL = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`;
	return await getMovies(apiURL);
}


const getMovieTitleFromExternal = async (movieID, external_source) => {
	const apiURL = `https://api.themoviedb.org/3/find/${movieID}?api_key=${API_KEY}&external_source=${external_source}`;
	const movie = await getMovies(apiURL);
	return movie.movie_results
}


const getTopMovies = async () => {
	const apiURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;
	const movies = await getMovies(apiURL);
	return movies.results;
}


const getActionMovies = async () => {
	const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
	const movies = await getMovies(apiURL);
	return movies.results;
}

const get1975Movies = async () => {
	const apiURL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=1975`
	const movies = await getMovies(apiURL);
	return movies.results;
};

