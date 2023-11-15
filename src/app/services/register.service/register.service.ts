import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

import {IRegisterForm} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  registerForm:BehaviorSubject<IRegisterForm | null> = new BehaviorSubject<IRegisterForm | null>(null)

  setForm(regForm:IRegisterForm | null):void{
    this.registerForm.next(regForm);
  }
  getForm():Observable<IRegisterForm | null>{
    return this.registerForm.asObservable();
  }

}
