import { Input, Component } from '@angular/core';
import { Partie } from '../../model/partie.model';

@Component({
  selector: 'app-partie',
  templateUrl: './partie.component.html',
  styleUrls: ['./partie.component.css']
})
export class PartieComponent {

  @Input()
  public partie: Partie;

  public deployed = false;

  constructor() { }

  public getGagnant(): string {
    return this.partie.resultats.find(r => r.position === 1).joueurDonneur.prenom;
  }

}