import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../../core/core.module'

import { MoviesState } from './store/movies.model'
import { moviesReducer } from './store/movies.reducer';

export const FEAUTURE_NAME = 'movies';

export const selectMoviesState = createFeatureSelector<State, MoviesFeatureState>(FEAUTURE_NAME);

export const reducers: ActionReducerMap<MoviesFeatureState> = { movies: moviesReducer };

export interface MoviesFeatureState {
  movies: MoviesState;
}

export interface State extends AppState {
  movies: MoviesState
}