import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";

import {RegisterFormComponent} from "../../shared/components";


@Component({
    selector: 'app-register',
    template: '',

})
export class RegisterComponent implements OnInit {

    constructor(private dialog: MatDialog) {
    }

    ngOnInit(): void {
        this.dialog.open(RegisterFormComponent, {
                disableClose: true,
                enterAnimationDuration: '1s',
                exitAnimationDuration: '1s',
                hasBackdrop: true
            }
        )
    }
}
