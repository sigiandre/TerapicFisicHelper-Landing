// import { createReducer, on, Action } from '@ngrx/store';
// import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity'

// import { Movie } from '../models/movie';
// import { fromMoviesActions } from './movies.action';

// export interface MoviesState extends EntityState<Movie> {
//   moviesLoaded: boolean;
//   error?: Error | any;
// }

// const adapter: EntityAdapter<Movie> = createEntityAdapter<Movie>();

// const initialState: MoviesState = adapter.getInitialState({
//   moviesLoaded: false
// });

// const reducer = createReducer(
//   initialState,
//   on(fromMoviesActions.loadMoviesSuccess, (state, action) => (
//     adapter.setAll(
//       action.movies,
//       { ...state, moviesLoaded: true }
//     )
//   )),
//   on(fromMoviesActions.createMovie, (state, action) => (
//     adapter.addOne(action.movie, state)
//   )),
//   on(fromMoviesActions.editMovie, (state, action) => (
//     adapter.updateOne(action.update, state)
//   ))
// )

// export function moviesReducer(
//   state: MoviesState | undefined,
//   action: Action
// ) {
//   return reducer(state, action)
// };

// export const {
//   selectAll,
//   selectIds
// } = adapter.getSelectors();
