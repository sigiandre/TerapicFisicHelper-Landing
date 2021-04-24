import { PropertiesService } from './../../api/properties.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdp-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements OnInit {
  searchString;
  searchTypeSelected;
  properties;
  constructor(private service: PropertiesService) { }
  ngOnInit(): void {
    this.service.getAllProperties().subscribe((res:any)=>{
      this.properties = res;
      console.log(this.properties)
    })
  }

  search(ev){
    console.log(ev);
  }

}
