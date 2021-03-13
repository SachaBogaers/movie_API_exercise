const body = document.querySelector("body");

const createElement = (type, innerHTML) => {
	const element = document.createElement(type);
	element.innerHTML = innerHTML;
	return element;
}


const renderingMovieGenres = async () => {
	const movieGenresObject = await getMovieGenres();
	const movieGenres = movieGenresObject.genres;
	const title = createElement('h1', 'Movie Genres')
	body.appendChild(title);
	const ul = document.createElement('ul');
	body.appendChild(ul);
	movieGenres.forEach(genre => {
		const li = createElement('li', `Genre name: ${genre.name}, id: ${genre.id}`)
		ul.appendChild(li)
	})
	return movieGenres;
}

const renderingFavouriteMovie = async () => {
	const favouriteMovieData = await getMovieTitleFromExternal("tt0396171", "imdb_id");
	const favouriteMovie = favouriteMovieData[0];
	const title = createElement('h1', `My favourite movie`);
	const text = createElement('p', `${favouriteMovie.title}`)
	body.appendChild(title);
	body.appendChild(text);
}

const renderingMovies = (type, text) => {
	const title = createElement('h1', text);
	const ul = createElement('ul', "");
	body.appendChild(title);
	body.appendChild(ul);
	type.forEach(movie => {
		const li = createElement('li', `${movie.title}`)
		ul.appendChild(li);
	})
}

const renderingTopMovies = async () => {
	const topMovies = await getTopMovies();
	renderingMovies(topMovies, "Top rated movies");
}

const renderingActionMovies = async () => {
	const actionMovies = await getActionMovies();
	renderingMovies(actionMovies, "Action movies");
}

const rendering1975Movies = async () => {
	const moviesFrom1975 = await get1975Movies();
	renderingMovies(moviesFrom1975, "Movies from 1975");
}

const renderingAll = async () => {
	await renderingMovieGenres();
	await renderingFavouriteMovie();
	await renderingTopMovies();
	await renderingActionMovies();
	await rendering1975Movies();
};

renderingAll();