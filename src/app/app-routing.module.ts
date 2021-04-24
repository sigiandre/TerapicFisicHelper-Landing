import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'landing', loadChildren: () => import('./features/landing/landing.module').then(m => m.LandingModule) },
      { path: 'properties', loadChildren: () => import('./features/properties/properties.module').then(m => m.PropertiesModule) },
      { path: 'movies', loadChildren: () => import('./features/movies/movies.module').then(m => m.MoviesModule) },
    ]
  },
  // { path: '**', redirectTo: '/' },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true
      // onSameUrlNavigation: 'reload'
      // useHash: true
    })
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
