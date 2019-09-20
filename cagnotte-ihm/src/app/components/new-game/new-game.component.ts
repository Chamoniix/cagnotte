import { Component, OnInit } from '@angular/core';
import {Partie} from "../../model/partie.model";
import {JoueurFormComponent} from "./joueur-form/joueur-form.component";
import {Resultat} from "../../model/resultat.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  public partiSubmitted = false;
  public nbJoueurs = 0;
  public joueursCrees = 0;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public partieNext(partie: Partie) {
    this.partiSubmitted = true;
    this.nbJoueurs = partie.nombreJoueurs;
    console.log(partie);
  }

  public joueurNext(resultat: Resultat) {
    if (this.joueursCrees == this.nbJoueurs -1) {
      this.router.navigate(['/home']);
    }
        this.joueursCrees += 1;

  }


}