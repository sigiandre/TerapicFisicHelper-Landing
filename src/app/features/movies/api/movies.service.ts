import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';


// export const MOVIES_API = environment.FAKE_API;

@Injectable()
export class MoviesService {

  // constructor(
  //   private http: HttpClient,
  // ) { }

  // getMovies() {
  //   return this.http.get<Movie[]>(`${MOVIES_API}/movies`);
  // }

  // getAllMovies(): Observable<Movie[]> {
  //   return this.http.get<Movie[]>(`${MOVIES_API}/movies`);
  // }

  // getMovie(id: string): Observable<Movie> {
  //   return this.http.get<Movie>(`${MOVIES_API}/movies/${id}`);
  // }

  // createMovie(movie): Observable<Movie> {
  //   return this.http.post<Movie>(`${MOVIES_API}/movies`, movie);
  // }

  // editMovie(id: string | number, movie: Partial<Movie>): Observable<Movie> {
  //   return this.http.put<Movie>(`${MOVIES_API}/movies/${id}`, movie);
  // }


}
