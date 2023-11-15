import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';

import {RegisterService} from "../services";
import {IRegisterForm} from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class RegGuard implements CanActivate {
    regForm: IRegisterForm | null;

    constructor(private regService: RegisterService,
                private router:Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        this.regService.getForm().subscribe(value => this.regForm = value)
        if (this.regForm === null)  this.router.navigate(['/register'])
        return this.regForm !== null;
    }
}
