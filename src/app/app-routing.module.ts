import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NewGameComponent } from './components/new-game/new-game.component'

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'new', component: NewGameComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot(routes)
    ],
  exports: [RouterModule]
})
export class AppRoutingModule { }