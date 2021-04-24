import { Observable } from 'rxjs';
import { AuthService } from './../api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'gdp-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  form: FormGroup;
  user: any;
  send: number = 0;
  users:any = [];
  constructor( private fb: FormBuilder, private service: AuthService) { }

  ngOnInit(): void {
    this.form = this.createForm();
}

  createForm() {
    // console.log('createForm',this.user)
    return this.fb.group({
      firstName: [this.user ? this.user.firstName : '', Validators.required],
      lastName: [this.user ? this.user.lastName : '', Validators.required],
      dni: [this.user ? this.user.dni : '', Validators.required],
      phone: [this.user ? this.user.phone : '', Validators.required],
      adress: [this.user ? this.user.adress : '', Validators.required],
      email: [this.user ? this.user.email : '', Validators.required],
      password: [this.user ? this.user.password : '', Validators.required],
    })
  }

  submit(post) {
    const userToSendFormData = new FormData();
    userToSendFormData.append("firstName",post.firstName)
    userToSendFormData.append("lastName",post.lastName)
    userToSendFormData.append("phone",post.phone)
    userToSendFormData.append("dni",post.dni)
    userToSendFormData.append("email",post.email)
    userToSendFormData.append("totalScore", '0')
    userToSendFormData.append("adressId", '0')
    userToSendFormData.append("hoobyes", '0')
    userToSendFormData.append("rommieId",'0')
    userToSendFormData.append("password",post.password)
    if(this.send == 0){
      this.service.addStudent(userToSendFormData);
    }
    else{
      this.service.addLandlord(userToSendFormData);
    }
  }

  sendStudent(){
this.send = 0;
}

sendProvider(){
  this.send = 1;
  }
}
