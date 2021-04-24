import { LandingComponent } from './containers/landing/landing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers

// Component

// Services


const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    // children: [
    //   {
    //     path: '',
    //     component: MoviesWriteComponent,
    //   },
    // ]
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
export class LandingRoutingModule { }
