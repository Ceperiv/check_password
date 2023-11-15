import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {RegisterService} from "../../../services";
import {IRegisterForm} from "../../../interfaces";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    searchFilter: string;
    regForm: IRegisterForm | null

    constructor(private regService: RegisterService,
                private router: Router) {
        this.searchFilter = '';
    };

    ngOnInit(): void {
        this.regService.getForm().subscribe(value => this.regForm = value)
    };

    onEndSession(): void {
        this.regService.setForm(null);
        this.router.navigate(['/register'])
    };

}
