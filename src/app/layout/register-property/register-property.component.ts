import { PropertiesService } from './../../features/properties/api/properties.service';
import { AuthService } from './../api/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gdp-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.scss']
})
export class RegisterPropertyComponent implements OnInit {
  form: FormGroup;
  user: any;
  send: number = 0;
  users:any = [];
  constructor( private fb: FormBuilder, private service: PropertiesService) { }

  ngOnInit(): void {
    this.form = this.createForm();
}

  createForm() {
    // console.log('createForm',this.user)
    return this.fb.group({
      cant_bath: [this.user ? this.user.firstName : '', Validators.required],
      cant_beds: [this.user ? this.user.lastName : '', Validators.required],
      cant_shading: [this.user ? this.user.dni : '', Validators.required],
      cost: [this.user ? this.user.phone : '', Validators.required],
      description: [this.user ? this.user.adress : '', Validators.required],
      id: [this.user ? this.user.email : '', Validators.required],
      imageurl: [this.user ? this.user.password : '', Validators.required],
      nRoom: [this.user ? this.user.password : '', Validators.required],
      size: [this.user ? this.user.password : '', Validators.required],
    })
  }

  submit(post) {
    const userToSendFormData = new FormData();
    userToSendFormData.append("cant_bath",post.cant_bath)
    userToSendFormData.append("cant_beds",post.cant_beds)
    userToSendFormData.append("cant_shading",'0')
    userToSendFormData.append("cost",post.cost)
    userToSendFormData.append("description",post.description)
    userToSendFormData.append("imageurl", post.imageurl)
    userToSendFormData.append("nRoom", post.nRoom)
    userToSendFormData.append("size", post.size)
    userToSendFormData.append("score",'0')
    userToSendFormData.append("active",'1')
    this.service.addProperty(userToSendFormData);
  }

  sendStudent(){
this.send = 0;
}

sendProvider(){
  this.send = 1;
  }

}
