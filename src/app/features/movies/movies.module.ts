import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Containers
import { MoviesComponent } from './containers/movies/movies.component';
import { MoviesWriteComponent } from './containers/movies-write/movies-write.component';

// Components
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { ListHeaderComponent } from './components/list-header/list-header.component';
import { ListFilterComponent } from './components/list-filter/list-filter.component';
import { ListComponent } from './components/list/list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

// Services
// import { MoviesService } from './api/movies.service';
import { MoviesWriteResolveService } from './containers/movies-write/movies-write.service';

// Store

// import { FEATURE_NAME } from './store/movies.selector';
// import { moviesReducer } from './store/movies.reducer';
// import { MoviesEffects } from './store/movies.effects';
import { MovieFormComponent } from './components/movie-form/movie-form.component';

@NgModule({
  declarations: [
    MoviesComponent,
    MoviesListComponent,
    ListHeaderComponent,
    ListFilterComponent,
    ListComponent,
    MovieDetailComponent,
    MoviesWriteComponent, MovieFormComponent,
  ],
  imports: [
    CommonModule,

    SharedModule,
    MoviesRoutingModule,
    // StoreModule.forFeature(FEATURE_NAME, moviesReducer),
    // EffectsModule.forFeature([MoviesEffects]),
  ],
  providers: [
    // MoviesService,
    MoviesWriteResolveService,
  ]
})
export class MoviesModule { }
