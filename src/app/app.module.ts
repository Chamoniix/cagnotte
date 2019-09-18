import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SommeComponent } from './components/somme/somme.component';
import { PartieComponent } from './components/partie/partie.component';
import { NewGameComponent } from './components/new-game/new-game.component';
import { AddButtonComponent } from './components/new-game/add-button/add-button.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SommeComponent, PartieComponent, NewGameComponent, AddButtonComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
