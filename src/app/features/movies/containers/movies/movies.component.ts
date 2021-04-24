import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

import { Movie } from '../../models/movie';
// import { fromMoviesActions } from '../../store/movies.action';
// import { getAllMovies } from '../../store/movies.selector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gdp-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit, OnDestroy {

  // movies$ = this.store.pipe(select(getAllMovies));
  description: string;

  constructor(
    private store: Store<any>,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    // this.store.dispatch((fromMoviesActions.loadMovies()))
    // this.http.get("http://localhost:8080/name",{responseType:'text'}).subscribe(
    //   (resp:any) =>{
    //     this.description = resp;
    // }),
    // (error:any) =>{
    //   console.log(error)
    // };
  }

  onMovieSelected(movie: Movie) {
    this.router.navigate(['/movies', movie.id])
  }

  ngOnDestroy(): void {
  }

}
