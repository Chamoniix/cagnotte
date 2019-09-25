import { Component, OnInit } from '@angular/core';
import {Partie} from "../../model/partie.model";
import { isNil } from 'lodash';
import {Resultat} from "../../model/resultat.model";
import {Router} from "@angular/router";
import {Utilisateur} from "../../model/utilisateur.model";
import {UtilisateurService} from "../../services/utilisateur.service";
import {PartieService} from "../../services/partie.service";

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  public partiSubmitted = false;
  public nbJoueurs = 0;
  public joueursCrees = 0;
  public joueurs: Utilisateur[];
  private partie: Partie;

  constructor(
      private utilisateurService: UtilisateurService,
      private partieService: PartieService,
      private router: Router
  ) { }

  ngOnInit() {
    this.utilisateurService.getAllUtilisateurs().subscribe(u => this.joueurs = u)
  }

  public partieNext(partie: Partie) {
    this.partiSubmitted = true;
    this.partie = partie;
    this.nbJoueurs = partie.nombreJoueurs;
  }

  public joueurNext(resultat: Resultat) {
    if (isNil(this.partie.resultats)){
      this.partie.resultats = [];
    }
    this.partie.resultats.push(resultat);
    this.joueursCrees += 1;
    if (this.joueursCrees == this.nbJoueurs) {
      this.partieService.addPartie(this.partie).subscribe();
      this.router.navigate(['/home']);
    }


    console.log(this.partie);
  }


}