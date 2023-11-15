import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {RegisterService} from "../../../services";

@Component({
    selector: 'app-register-form',
    templateUrl: './register-form.component.html',
    styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
    form: FormGroup;
    error: boolean = false;
    hasLetters: boolean = false;
    hasDigits: boolean = false;
    hasSymbols: boolean = false;
    isRequired: boolean = false
    sectionStrength: number = 0;
    sectionColor: string;

    constructor(private regService: RegisterService,
                private dialogRef: MatDialogRef<RegisterFormComponent>,
                private router: Router) {
        this._initForm()
    }

    ngOnInit(): void {
        console.log(this.error);
    }

    _initForm(): void {
        this.form = new FormGroup({
            username: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[0-9])(?=.*[\W_]).{8,}$/)])
        })
    };

    checkPasswordStrength() {
        const value = this.form.get('password')?.value;
        this.isRequired = value.length >= 1;
        this.hasLetters = /[A-Za-z]/.test(value);
        this.hasDigits = /\d/.test(value);
        this.hasSymbols = /[^A-Za-z\d]/.test(value);
        this.isOnlyOneTrue()
    };

    isOnlyOneTrue(): void {
        let count = 0;
        if (this.hasLetters) count++;
        if (this.hasDigits) count++;
        if (this.hasSymbols) count++;
        this.sectionStrength = count;

        this.sectionColor = this.getColor();
    };


    getColor(): string {
        switch (this.sectionStrength) {
            case 1:
                return 'red';
            case 2:
                return 'darkgoldenrod';
            case 3:
                return 'green';
            default:
                return 'gray';
        }
    };

    register(): void {
        this.regService.setForm(this.form.value);
        this.dialogRef.close()
        this.router.navigate(['/home'])
    };

    goToContacts():void {
      this.router.navigate(['/contacts'])
      this.dialogRef.close()
    };
}
