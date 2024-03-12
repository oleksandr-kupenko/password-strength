import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {LoginComponent} from "./components/login/login.component";
import {AppRoutingModule} from "./auth-routing.module";



@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
