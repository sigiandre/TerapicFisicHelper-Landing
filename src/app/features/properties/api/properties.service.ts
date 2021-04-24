import { ToastrService } from 'ngx-toastr';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertiesService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

    getAllProperties(){
      return this.http.get(`/property/list`);
    }
    getProperty(id){
      return this.http.get(`/property/${id}`);
    }
    addProperty(property){
      console.log(property.get("firstName"))
      return this.http.post(`/property/`,property).subscribe(
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
          this.toastr.success('Registro de property Exitoso!', 'Felicidades!');
          console.log("The POST observable is now completed.");
          return true;
        }
      )
    }
}
