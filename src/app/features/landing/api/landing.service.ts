import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(
    private http: HttpClient,
  ) { }

  // getAllUsers() {
  //   return this.http.get<IUser[]>(`${FAKE_API}/users`);
  // }

  // getUserbyId(userId: any):  Observable<IUser> {
  //   return this.http.get<IUser>(`${FAKE_API}/users/${userId}`);
  // }

  // getMoviebyId(id : string):  Observable<IMovie>{
  //   return this.http.get<IMovie>(`${FAKE_API}/movies/${id}`);
  // }

  // newMovie(movie: any): Observable<IMovie>{
  //   return this.http.post<IMovie>(`${FAKE_API}/movies`, movie);
  // }

  // editMovie(movie: IMovie): Observable<IMovie>{
  //   return this.http.put<IMovie>(`${FAKE_API}/movies/${movie.id}`, movie);
  // }
}
