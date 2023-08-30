import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvaComponent } from './prova/prova.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { Prova2Component } from './prova2/prova2.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    ProvaComponent,
    Prova2Component
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { };



