import { UserEditStore } from './../../shared/services/login.service';
import { RegisterPropertyComponent } from './../register-property/register-property.component';
import { RegisterformComponent } from './../registerform/registerform.component';
import { LoginformComponent } from './../loginform/loginform.component';
import { Component, OnInit, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'gdp-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  open:any = false;
  constructor(public dialog: MatDialog,private loginsev: UserEditStore) {}
  itsSesion=false
  userlogin
  ngOnInit(): void {
    this.open = false;
    this.loginsev.getProfileObs().subscribe(
      data => {
      this.userlogin = data
      this.itsSesion=true
    });
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.

  }

  closeSesion(){
    this.loginsev.updatedDataSelection(null)
  }

  @HostListener('window:scroll', ['$event'])


  onWindowScroll(e) {
    let element = document.querySelector('.navbar');
    if (window.pageYOffset > element.clientHeight) {
      element.classList.add('navbar-inverse');
    } else {
      element.classList.remove('navbar-inverse');
    }
  }
  openDialogLogin() {
    const dialogRef = this.dialog.open(LoginformComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogRegister() {
    const dialogRef = this.dialog.open(RegisterformComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openDialogRegisterProperty() {
    const dialogRef = this.dialog.open(RegisterPropertyComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openModal(){
    this.open = !this.open;
  }
}
