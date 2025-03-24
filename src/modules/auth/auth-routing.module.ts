/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SBRouteData } from '@modules/navigation/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: 'login',
        canActivate: [],
        component: null, // Removed reference to authContainers.LoginComponent
        data: {
            title: 'Pages Login - BookTracker',
        } as SBRouteData,
    },
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)], // Removed AuthModule
    exports: [RouterModule],
})
export class AuthRoutingModule {}
