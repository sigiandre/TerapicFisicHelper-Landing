import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf, ErrorHandler } from '@angular/core';
import {
  HttpClientModule,
} from '@angular/common/http';

import { environment } from 'src/environments/environment';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppState, reducers  } from './core.state'

export {
  AppState,
}

@NgModule({
  imports:[
    CommonModule,
    HttpClientModule,

    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([

    ]),
    environment.production
    ? []
    : StoreDevtoolsModule.instrument({
      name: 'GDP Starter Project'
    }),
  ],
  declarations: [],
  providers: [],
  exports: []
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule')
    }
  }
}