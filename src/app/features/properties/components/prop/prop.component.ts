import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gdp-prop',
  templateUrl: './prop.component.html',
  styleUrls: ['./prop.component.scss']
})
export class PropComponent implements OnInit {
  @Input() prop
  constructor(private Router :Router) { }

  ngOnInit(): void {
    console.log('gaaa'+ JSON.stringify(this.prop))
  }

  goTodetail(){
    console.log("y fue o no?")
    this.Router.navigate([{ id: this.prop.id }]);
  }

}
