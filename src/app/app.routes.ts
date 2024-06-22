import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
    {path: 'Welcome', component: WelcomeComponent},
    {path:'', redirectTo: 'Welcome', pathMatch:'full'},
    
];
