import { Component, OnInit } from '@angular/core';
import {Partie} from "../../model/partie.model";
import {Meta} from "@angular/platform-browser";
import {Resultat} from "../../model/resultat.model";
import {Utilisateur} from "../../model/utilisateur.model";
import {PartieService} from "../../services/partie.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public sommeTotale = 0;
    public parties: Partie[] = [];

    constructor(private meta: Meta,
                private partieService: PartieService) {
        this.meta.addTag({ name: 'theme-color', content: '#121212' });
        this.meta.addTag({ name: 'msapplication-navbutton-color', content: '#121212' });
        this.meta.addTag({ name: 'apple-mobile-web-app-status-bar-style', content: '#121212' });
    }

    public ngOnInit() {
        this.partieService.getAllParties().subscribe( parties => {
            this.parties = parties;
            this.calculateSommeTotale();
        });
    }

    private calculateSommeTotale() {
        this.parties.forEach(partie => {
            partie.resultats
                .filter(r => r.utilisateurPreneur !== undefined && r.utilisateurPreneur.nom === 'CAGNOTTE')
                .forEach( r => this.sommeTotale += r.somme);
        });
    }

    // private initPartie(i: number): Partie {
    //   return new Partie({
    //       typePartie: 'Deploisat ' + i,
    //       //date: moment('2019-08-26'),
    //       nombreJoueurs: 4,
    //       resultats: [
    //         new Resultat ({
    //           somme: 20,
    //           joueurDonneur: new Utilisateur ({
    //             nom: 'Bonnevialle',
    //             prenom: 'Théo'
    //           }),
    //           joueurPreneur: new Utilisateur ({
    //             nom: 'CAGNOTTE',
    //             prenom: 'CAGNOTTE'
    //           }),
    //           position: 3
    //         }),
    //         new Resultat ({
    //           somme: 20,
    //           joueurDonneur: new Utilisateur ({
    //             nom: 'Salignat',
    //             prenom: 'Corentin'
    //           }),
    //           joueurPreneur: new Utilisateur ({
    //             nom: 'CAGNOTTE',
    //             prenom: 'CAGNOTTE'
    //           }),
    //           position: 4
    //         }),
    //         new Resultat ({
    //           somme: 5,
    //           joueurDonneur: new Utilisateur ({
    //             nom: 'Muret',
    //             prenom: 'Alexis'
    //           }),
    //           joueurPreneur: new Utilisateur ({
    //             nom: 'Gybels',
    //             prenom: 'Hugo'
    //           }),
    //           position: 2
    //         }),
    //         new Resultat ({
    //           somme: 0,
    //           joueurDonneur: new Utilisateur ({
    //             nom: 'Gybels',
    //             prenom: 'Hugo'
    //           }),
    //           position: 1
    //         })
    //       ]
    //     });
    // }

}
