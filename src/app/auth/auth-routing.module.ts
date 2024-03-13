import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PasswordComponent} from "./components/password/password.component";
import {AuthComponent} from "./auth.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: '', redirectTo: 'password', pathMatch: 'full' },
      { path: 'password', component: PasswordComponent }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
