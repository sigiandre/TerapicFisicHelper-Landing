import { loginForm } from './../models/loginForm.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable({providedIn: 'root'})
export class UserEditStore {
  private profileObs$: BehaviorSubject<loginForm> = new BehaviorSubject(null);
  constructor() { }
  updatedDataSelection(data: loginForm){
    return this.profileObs$.next(data);
  }
  getProfileObs(): Observable<loginForm> {
      return this.profileObs$.asObservable();
  }
}
