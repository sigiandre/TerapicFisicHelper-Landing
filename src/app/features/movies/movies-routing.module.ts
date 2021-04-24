import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { MoviesComponent } from './containers/movies/movies.component';
import { MoviesWriteComponent } from './containers/movies-write/movies-write.component';

// Component

// Services
import { MoviesWriteResolveService } from './containers/movies-write/movies-write.service';


const routes: Routes = [
  { 
    path: '', 
    component: MoviesComponent,
    children: [
      {
        path: ':id',
        component: MoviesWriteComponent,
        resolve: {
          movie: MoviesWriteResolveService
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MoviesRoutingModule { }
