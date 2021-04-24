import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Shared modules
import { ComponentsModule } from './components/components.module';
import { DirectivesModule } from './directives/directives.module';
import { LibrariesModule } from './libraries/libraries.module';
import { PipesModule } from './pipes/pipes.module';

@NgModule({
  declarations: [],
  imports: [
    // Angular modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // Shared modules
    LibrariesModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    // Shared modules
    LibrariesModule,
    ComponentsModule,
    DirectivesModule,
    PipesModule,
  ]
})
export class SharedModule { }
