import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { RegisterComponent } from './register/register.component';
import { VerificarCorreoComponent } from './verificar-correo/verificar-correo.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'verificarCorreo', component: VerificarCorreoComponent},
  {path: 'recuperarPassword', component: RecuperarPasswordComponent},
  {path: 'dashboard', component: DashboardComponent },
  {path: '', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
