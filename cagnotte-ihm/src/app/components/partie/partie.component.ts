import { Input, Component } from '@angular/core';
import { Partie } from '../../model/partie.model';
import { isNil } from 'lodash';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.scss']
})
export class PartieComponent {

  @Input()
  set partieSetter(partie: Partie) {
    this.utilisateurGagnant = partie.resultats.find(r => r.position === 1).utilisateurDonneur.prenom;
    partie.resultats = partie.resultats.filter(r => !isNil(r.utilisateurPreneur));
    partie.resultats.sort((a,b) => {return (a.somme > b.somme) ? 1 : 0});
    this.partie = partie;
  };

  public utilisateurGagnant: string;
  public partie: Partie;
  public deployed = false;

  constructor() { }

  public tooglePartie() {
    this.deployed = !this.deployed;
  }

}