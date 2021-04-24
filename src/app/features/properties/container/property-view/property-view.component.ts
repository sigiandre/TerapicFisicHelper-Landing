import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from "@angular/core";
import { PropertiesService } from "../../api/properties.service";

@Component({
  selector: "gdp-property-view",
  templateUrl: "./property-view.component.html",
  styleUrls: ["./property-view.component.scss"],
})
export class PropertyViewComponent implements OnInit {
  property
  constructor(private service: PropertiesService,
    private route: ActivatedRoute) {
    // service.getProperty(1).subscribe((res:any)=>{
    //   this.property = res;
    //   console.log(this.property)
    // });
    route.data
    .subscribe(
      data => this.property = data['property']
    )
  }

  ngOnInit(): void {
    console.log( "checa: " + JSON.stringify(this.property))
  }
}
