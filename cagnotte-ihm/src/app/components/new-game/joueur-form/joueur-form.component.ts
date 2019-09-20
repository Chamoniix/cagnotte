import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Resultat} from "../../../model/resultat.model";

@Component({
  selector: 'app-joueur-form',
  templateUrl: './joueur-form.component.html',
  styleUrls: ['./joueur-form.component.scss']
})
export class JoueurFormComponent implements OnInit {

  private resultat: Resultat = new Resultat( {
    id: 10,
    joueurDonneur: undefined,
    joueurPreneur: undefined,
    position: 1,
    somme: 50,
  });

  @Input()
  public position: number;

  @Output()
  public eventJoueurNext = new EventEmitter<Resultat>();

  constructor() { }

  ngOnInit() {
  }

  public joueurNext() {
    this.eventJoueurNext.emit(this.resultat);
  }

}
