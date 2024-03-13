import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./auth-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {PasswordStrengthComponent} from "./components/password-strength/password-strength.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatListModule, MatListOption} from "@angular/material/list";
import {PasswordComponent} from "./components/password/password.component";



@NgModule({
  declarations: [AuthComponent, PasswordComponent, PasswordStrengthComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatListModule
  ],
  exports: [AuthComponent]
})
export class AuthModule { }
