import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

export const ROUTES: Routes = [
  {
    // path: '',
    // component: AuthComponent,
    // children: [
    //   { path: '', redirectTo: 'login', pathMatch: 'full' },
    //   { path: 'login', component: LoginComponent },
    //   { path: 'first-time', component: FirstTimeComponent },
    //   { path: 'forgot-password', component: ForgotPasswordComponent },
    //   { path: 'reset-password', component: ResetPasswordComponent },
    // ]
  },
  {
    path: '**',
    redirectTo: ''
  },
]

@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forChild(ROUTES),
   ],
  exports: [
    RouterModule
  ],
  providers: [],
})
export class AuthRoutingModule {}