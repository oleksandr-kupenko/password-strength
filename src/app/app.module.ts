import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthModule} from "./auth/auth.module";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";
import {BrowserModule, platformBrowser} from "@angular/platform-browser";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AuthModule,
    RouterModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync()
  ]
})
export class AppModule { }

