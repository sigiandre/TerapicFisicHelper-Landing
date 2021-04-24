// import { Update } from '@ngrx/entity'
// import { Movie } from '../models/movie';
// import { createAction, props } from '@ngrx/store';

// enum MoviesActionTypes {
//   LoadMovies = "[Movies] Load List",
//   LoadMoviesSuccess = "[Movies] Load List Success",
//   LoadMoviesFail = "[Movies] Load List Fail",

//   CreateMovie = "[Movies] Create Movie",
//   EditMovie = "[Movies] Edit Movie",
// }

// const loadMovies = createAction(MoviesActionTypes.LoadMovies);

// const loadMoviesSuccess = createAction(
//   MoviesActionTypes.LoadMoviesSuccess,
//   props<{ movies: Movie[] }>()
// );

// const loadMoviesFail = createAction(
//   MoviesActionTypes.LoadMoviesFail,
//   props<{ error: Error | any }>()
// )

// const createMovie = createAction(
//   MoviesActionTypes.CreateMovie,
//   props<{ movie: Movie }>()
// )

// const editMovie = createAction(
//   MoviesActionTypes.EditMovie,
//   props<{ update: Update<Movie> }>()
// )

// export const fromMoviesActions = {
//   loadMovies,
//   loadMoviesSuccess,
//   loadMoviesFail,

//   createMovie,
//   editMovie,
// }
