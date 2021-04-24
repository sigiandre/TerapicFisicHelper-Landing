import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { SharedModule } from 'src/app/shared/shared.module';
import { LandingRoutingModule } from './landing-routes.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

// Containers

// Components
import { LandingComponent } from './containers/landing/landing';


// Services
import { LandingService } from './api/landing.service';


// Store

// import { FEATURE_NAME } from './store/movies.selector';
// import { moviesReducer } from './store/movies.reducer';
// import { MoviesEffects } from './store/movies.effects';
// import { MovieFormComponent } from './components/movie-form/movie-form.component';



@NgModule({
  declarations: [LandingComponent],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule,
    EffectsModule,
    LandingRoutingModule
  ],
  providers: [
    LandingService,
  ]
})
export class LandingModule { }
