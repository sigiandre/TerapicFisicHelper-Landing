import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gdp-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  public urlList = [
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg',
    'https://hotelerum.com/wp-content/uploads/2016/04/Lo-que-los-hu%C3%A9spedes-miran-de-las-fotos-de-las-habitaciones-del-hotel.jpg'
  ]
  @Input()propurl;
  constructor() { }

  ngOnInit(): void {
    console.log('aca' + this.urlList)
  }

}
