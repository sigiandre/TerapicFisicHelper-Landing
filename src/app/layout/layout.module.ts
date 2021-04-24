import { UserEditStore } from './../shared/services/login.service';
import { AuthService } from './api/auth.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Modules
import { SharedModule } from '../shared/shared.module';


import { LayoutComponent } from './layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LoginformComponent } from './loginform/loginform.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { RegisterPropertyComponent } from './register-property/register-property.component';



@NgModule({
  declarations: [
    LayoutComponent,
    ToolbarComponent,
    SidebarComponent,
    LoginformComponent,
    RegisterformComponent,
    RegisterPropertyComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
    LayoutComponent,
  ],
  providers: [
    AuthService,
    UserEditStore
  ]
})
export class LayoutModule { }
