import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import { Update } from '@ngrx/entity';

// import { fromMoviesActions } from '../../store/movies.action';
import { Movie } from '../../models/movie';
import { filter } from 'rxjs/operators';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'gdp-movies-write',
  templateUrl: './movies-write.component.html',
  styleUrls: ['./movies-write.component.scss'],
})
export class MoviesWriteComponent implements OnInit, OnDestroy {

  movie: Movie = {};
  pageType = "create"; // new - Registrar movie, :id - Editar movie

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<any>,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.movie = this.activatedRoute.snapshot.data.movie;
      this.pageType = (this.movie) ? 'edit' : 'create';
    });
  }

  onCreateMovie(movie): void {
    // this.store.dispatch(fromMoviesActions.createMovie({ movie }))
  }

  onEditMovie(movie): void {
    const update: Update<Movie> = {
      id: this.movie.id,
      changes: { ...this.movie, ...movie }
    }
    // this.store.dispatch(fromMoviesActions.editMovie({ update }))
  }

  ngOnDestroy(): void {
  }

}
