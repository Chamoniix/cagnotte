import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component';
import { SommeComponent } from './components/somme/somme.component';
import { PartieComponent } from './components/partie/partie.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { AddButtonComponent } from './components/new-game/add-button/add-button.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { PartieFormComponent } from './components/new-game/partie-form/partie-form.component';
import { JoueurFormComponent } from './components/new-game/joueur-form/joueur-form.component';
import {PartieService} from "./services/partie.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  declarations: [
    AppComponent,
    SommeComponent,
    PartieComponent,
    NewGameComponent,
    AddButtonComponent,
    HomeComponent,
    PartieFormComponent,
    JoueurFormComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    PartieService
  ]
})
export class AppModule { }
