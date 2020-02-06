import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/_services/auth.guard';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegistrationFormComponent},
  {path:'home',component:SideNavComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
