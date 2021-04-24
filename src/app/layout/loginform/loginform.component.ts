import { loginForm } from './../../shared/models/loginForm.model';
import { UserEditStore } from './../../shared/services/login.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../api/auth.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'gdp-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  form: FormGroup
  users: any;
  student = []
  user: any;
  userlogin;
  constructor(private http:HttpClient, public serv: AuthService,private fb: FormBuilder,  private loginsev: UserEditStore) {
}

  ngOnInit(): void {
    const headers = new Headers();
    this.form = this.createForm();
    this.loginsev.getProfileObs().subscribe(
      data => {
      this.userlogin = data
    });
    console.log("usuario registrado: " + this.userlogin)
    // this.serv.addStudent(this.student).subscribe((res:any)=>{
    //   console.log(res);
    // })
  }
  createForm() {
    console.log('createForm',this.user)
    return this.fb.group({
      email: [this.user ? this.user.email : '', Validators.required],
      password: [this.user ? this.user.password : '', Validators.required],
    })
  }
  submit(post) {
    console.log("entro aca")
    const userToSendFormData = new FormData();
    userToSendFormData.append("email",post.email)
    userToSendFormData.append("password",post.password)
    this.serv.login(userToSendFormData);
  }
}
