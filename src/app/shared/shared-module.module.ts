import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDialogModule} from "@angular/material/dialog";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {MainLayoutComponent} from "./layouts";
import {FooterComponent, HeaderComponent, RegisterFormComponent} from './components';
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    MainLayoutComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent
  ],
    exports: [

    ],
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    RouterLink,
    RouterLinkActive,
    MatCardModule
  ]
})
export class SharedModuleModule {
}
