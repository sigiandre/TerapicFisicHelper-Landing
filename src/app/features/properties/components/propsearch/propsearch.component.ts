import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'gdp-propsearch',
  templateUrl: './propsearch.component.html',
  styleUrls: ['./propsearch.component.scss']
})
export class PropsearchComponent implements OnInit {
  @Input() selectedOpt = 0; // 1 h - 2 r - 3 a
  @Input() searchValue ="";
  @Output() selectedOptOut = new EventEmitter(); // 1 h - 2 r - 3 a
  constructor() { }

  ngOnInit(): void {
  }

  sendSearch(form){
    var emit ={}
    this.searchValue = form.value.searchValue
    emit['value'] = this.searchValue;
    emit['type'] = this.selectedOpt;
    this.selectedOptOut.emit(emit);
  }

  asignselectedOpt(value){
    this.selectedOpt = value;
    this.searchValue = "";
  }

}
