import { loginForm } from './../../shared/models/loginForm.model';
import { UserEditStore } from './../../shared/services/login.service';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';

const headers = new Headers();
headers.append("Access-Control-Allow-Headers", "Content-Type");
headers.append("Access-Control-Allow-Methods", "GET");
headers.append("Access-Control-Allow-Origin", "*");

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient,
    private toastr: ToastrService,
    private loginsev: UserEditStore
    ) {}
    getAllStudents() {
    return this.http.get(`/property/list`);
  }
  addStudent(student: any) {
    var allUsers;
    var registeredUser = false;
    this.http.get(`/student/list`).subscribe((res:any)=>{
      allUsers = res;
      for (let index = 0; index < allUsers.length; index++) {
        if(allUsers[index].email == student.get("email")){
          registeredUser = true
        }
      }
      if(registeredUser == false){
        this.http.post("/student/", student).subscribe(
          (val) => {
            // this.toastr.success('Registro Exitoso!', 'Felicidades!');
            console.log("POST call successful value returned in body", val);
          },
          (response) => {
            this.toastr.error('Registro Fallido!', 'Error!');
            console.log("POST call in error", response);
            return false;
          },
          () => {
            this.toastr.success('Registro de student Exitoso!', 'Felicidades!');
            console.log("The POST observable is now completed.");
            return true;
          }
        );
      }else{
        this.toastr.error('el email ya ha sido registrado!', 'Error!');
        console.log("el email ya ha sido registrado")
        return false;
      }
    })
  }
  addLandlord(student: any) {
    var allUsers;
    var registeredUser = false;
    console.log(student.get("firstName"))
    this.http.get(`/landlord/list`).subscribe((res:any)=>{
      allUsers = res;
      for (let index = 0; index < allUsers.length; index++) {
        if(allUsers[index].email == student.get("email")){
          registeredUser = true
        }
      }
      if(registeredUser == false){
        this.http.post("/landlord/", student).subscribe(
          (val) => {
            // this.toastr.success('Registro Exitoso!', 'Felicidades!');
            console.log("POST call successful value returned in body", val);
          },
          (response) => {
            this.toastr.error('Registro Fallido!', 'Error!');
            console.log("POST call in error", response);
            return false;
          },
          () => {
            this.toastr.success('Registro de landlord Exitoso!', 'Felicidades!');
            console.log("The POST observable is now completed.");
            return true;
          }
        );
      }else{
        this.toastr.error('el email ya ha sido registrado!', 'Error!');
        console.log("el email ya ha sido registrado")
        return false;
      }
    })
  }

  login(student: any) {
    var allUsers;
    var registeredUser = 0;
    console.log("entro: "+student.get("email"))
    this.http.get(`/student/list`).subscribe((res:any)=>{
      allUsers = res;
      for (let index = 0; index < allUsers.length; index++) {
        if(allUsers[index].email == student.get("email")){
           registeredUser = 1;
          if(allUsers[index].password == student.get("password")){
             registeredUser = 2;
        }
      }
    }
    switch (registeredUser) {
      case 0:
        this.toastr.error('el usuario no existe!', 'Error!');
        break;
      case 1:
        this.toastr.error('la contrseña es incorrecta!', 'Error!');
        break;
      case 2:
        var user = new loginForm()
        user.user = student.get("email")
        user.password = student.get("password")
        this.toastr.success('incio de sesion!', 'Felicidades!');
        this.loginsev.updatedDataSelection(user)
        break;

      default:
        break;
    }
    })
  }
}

