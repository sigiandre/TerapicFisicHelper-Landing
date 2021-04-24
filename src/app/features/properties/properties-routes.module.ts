import { propertyResolver } from './models/propety.resolver';
import { PropertyViewComponent } from "./container/property-view/property-view.component";
import { PropertiesComponent } from "./container/properties/properties.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// Containers

// Component

// Services

const routes: Routes = [
  {
    path: "",
    component: PropertiesComponent,
  },
  {
    path: ":id",
    component: PropertyViewComponent,
    resolve: {
      property: propertyResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PropertiesRoutingModule {}
