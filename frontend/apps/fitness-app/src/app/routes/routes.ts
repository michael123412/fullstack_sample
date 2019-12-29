import { Routes } from "@angular/router";
import { WelcomeComponent } from '../welcome/welcome.component';

export const ROUTES: Routes = [{
    path: '',
    pathMatch: 'full',
    component: WelcomeComponent   
}];