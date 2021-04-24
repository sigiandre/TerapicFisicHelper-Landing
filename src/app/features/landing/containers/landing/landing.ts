import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';

// import { Movie } from '../../models/movie';
// import { fromMoviesActions } from '../../store/movies.action';
// import { getAllMovies } from '../../store/movies.selector';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gdp-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit, OnDestroy {
breakpoint:any ="";
cols:any =2;
rowheight:any ="2:1";
countries:any =[
  {name:"AYUDAMOS A RECUPERARTE",image:"assets/img/fisioterapia.png", content:"En Terapic Fisic Helper contamos con un personal capacitado dispuesto a hacer todo lo posible para ayudarte con tu recuperación."},
  {name:"NO TENGAS MIEDO A DAR EL PRIMER PASO",image:"assets/img/paciente.png", content:"En esta compañía te daremos la confianza suficiente para que tengas esa fuerza de voluntad y no te rindas."},
  {name:"SI LO PUEDES IMAGINAR, PUEDES LOGRARLO",image:"assets/img/rehabilitacion (1).png", content:"Obtendrás un servicio garantizado, el cual, este contará con las técnicas de rehabilitación más eficientes para tu pronta recuperación."},
  {name:"TU SALUD EN CONFIANZA",image:"assets/img/rehabilitacion.png", content:"Tu salud es importante para nosotros. Tendrás un trato especial y personalizado, en el que podrás sentirte a gusto del trabajo que realizan nuestros profesionales."},
]
personas:any =[
  {name:"Valery Arauco Pariona",image:"assets/img/86372daa828944acec612198ddf2fb33.jpg", content:": Inscribirme en esta compañía me ha ayudado mucho a fortalecer mi cuerpo y poder llevar una vida más sana."},
  {name:"Carolina Fernandez",image:"assets/img/images123.jpg", content:"Me siento con más energía que antes, gracias a Terapic Fisic Helper."},
  {name:"Carlos Alberto Alcalde Iturri",image:"assets/img/images.jpg", content:"Carlos Alberto: Tengo 25 años y tuve una lesión en la pierna derecha y la compañía Terapic Fisic Helper me ayudó a recuperarme rápidamente."},
  {name:"Luis Cribillero",image:"assets/img/karol.jpg", content:"Gracias a Terapic Fisic Helper me siento cada vez mejor, pues ellos me dan todas las facilidades para poder recuperarme."},
]
onResize(event) {
  this.breakpoint = (event.target.innerWidth >= 700) ? 4 : 1;
  this.rowheight = (event.target.innerWidth >= 700) ? "2:1" : "1:1";
  this.cols = (event.target.innerWidth >= 700)? 2:1;
}
  constructor(
    private store: Store<any>,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.breakpoint = (window.innerWidth >= 700) ? 4 : 1;
    this.rowheight = (window.innerWidth >= 700) ? "2:1" : "1:1";
    this.cols = (window.innerWidth >= 700)? 2:1;
  }
  ngOnDestroy(): void {
  }

  resize(){
    this.breakpoint = (window.innerWidth >= 700) ? 2:1;
    this.rowheight = (window.innerWidth >= 700) ? "2:1" : "1:1";
    this.cols = (window.innerWidth >= 700)? 2:1;
  }

}
