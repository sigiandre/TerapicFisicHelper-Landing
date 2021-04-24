// import { Injectable } from '@angular/core';
// import { Actions, createEffect, ofType } from '@ngrx/effects';
// import { switchMap, map, catchError } from 'rxjs/operators';
// import { throwError } from 'rxjs';

// import { fromMoviesActions } from './movies.action'
// import { MoviesService } from '../api/movies.service'
// import { Router } from '@angular/router';

// @Injectable()
// export class MoviesEffects {

//   constructor(
//     private actions$: Actions,
//     private service: MoviesService,
//     private router: Router,
//   ) { }

//   loadMovies$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(fromMoviesActions.loadMovies),
//       switchMap(() =>
//         this.service.getAllMovies().pipe(
//           map((movies: any) => fromMoviesActions.loadMoviesSuccess({ movies })),
//           catchError(error => throwError(error))
//         )
//       )
//     )
//   )

//   createMovie$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(fromMoviesActions.createMovie),
//       switchMap((action) =>
//         this.service.createMovie(action.movie).pipe(
//           map((res: any) => {
//             this.router.navigate(['/movies']);
//             return fromMoviesActions.loadMovies();
//           }),
//           catchError(error => throwError(error))
//         )
//       )
//     ),
//     { dispatch: false }
//   )

//   editMovie$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(fromMoviesActions.editMovie),
//       switchMap((action) =>
//         this.service.editMovie(action.update.id, action.update.changes).pipe(
//           map((res: any) => {
//             this.router.navigate(['/movies']);
//             return fromMoviesActions.loadMovies();
//           }),
//           catchError(error => throwError(error))
//         )
//       )
//     ),
//     { dispatch: false }
//   )
// }
