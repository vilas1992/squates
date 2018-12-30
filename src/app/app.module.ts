import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SocialService } from './social.service';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,      
    BrowserAnimationsModule,
    AppRoutingModule    
  ],
  providers: [SocialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
