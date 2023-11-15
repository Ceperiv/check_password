import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {MainLayoutComponent} from "./shared/layouts";
import {Error404Component, HomeComponent, InfoComponent, RegisterComponent} from "./pages";
import {RegGuard} from "./guards";

const routes: Routes = [
    {
        path: '', component: MainLayoutComponent, children: [
            {path: '', redirectTo: 'register', pathMatch: 'full'},
            {path: 'register', component: RegisterComponent},
            {
                path: 'home', canActivate: [RegGuard],
                runGuardsAndResolvers: 'paramsOrQueryParamsChange',
                component: HomeComponent
            },
            {path: 'contacts', component: InfoComponent},
        ],

    },
    {path: '**', redirectTo: 'error404', title: '404', data: {error: 404}},
    {path: 'error404', data: {error: 404}, component: Error404Component}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
