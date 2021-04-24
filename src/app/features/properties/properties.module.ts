import { propertyResolver } from './models/propety.resolver';
import { PropertiesService } from './api/properties.service';
import { PropertiesRoutingModule } from './properties-routes.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesComponent } from './container/properties/properties.component';
import { PropComponent } from './components/prop/prop.component';
import { PropsearchComponent } from './components/propsearch/propsearch.component';
import { PropertyViewComponent } from './container/property-view/property-view.component';
import { ImagesComponent } from './components/images/images.component';


@NgModule({
  declarations: [PropertiesComponent, PropComponent, PropsearchComponent, PropertyViewComponent, ImagesComponent],
  imports: [
    SharedModule,
    CommonModule,
    StoreModule,
    EffectsModule,
    PropertiesRoutingModule
  ],
  providers: [
    PropertiesService,
    propertyResolver
  ]
})
export class PropertiesModule { }
