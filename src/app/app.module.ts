import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { NopagefounComponent } from '../app/nopagefoun/nopagefoun.component';


@NgModule({
  declarations: [
    AppComponent, NopagefounComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    SharedModule,
    AuthModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
