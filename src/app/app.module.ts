import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SommeComponent } from './components/somme/somme.component';
import { PartieComponent } from './components/partie/partie.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, SommeComponent, PartieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
