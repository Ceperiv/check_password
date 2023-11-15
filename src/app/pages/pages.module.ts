import {NgModule} from '@angular/core';
import {RouterLink} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {CommonModule} from '@angular/common';
import {MatButtonModule} from "@angular/material/button";

import {Error404Component} from "./error404/error404.component";
import {HomeComponent} from "./home/home.component";
import {RegisterComponent} from "./register/register.component";
import {InfoComponent} from "./info/info.component";

@NgModule({
    declarations: [
        HomeComponent,
        Error404Component,
        RegisterComponent,
        InfoComponent
    ],
    imports: [
        CommonModule,
        RouterLink,
        MatIconModule,
        MatButtonModule,

    ]
})

export class PagesModule {
}
