import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Resultat} from "../../../model/resultat.model";
import {Utilisateur} from "../../../model/utilisateur.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-joueur-form',
  templateUrl: './joueur-form.component.html',
  styleUrls: ['./joueur-form.component.scss']
})
export class JoueurFormComponent implements OnInit {

  private resultat = new Resultat({});
  public joueurFormGroup: FormGroup;

  @Input()
  public position: number;

  @Input()
  public joueurs: Utilisateur[];

  @Output()
  public eventJoueurNext = new EventEmitter<Resultat>();

  constructor(private formBuilder: FormBuilder) {
      this.joueurFormGroup = this.formBuilder.group({
            'somme': ['', [Validators.required, Validators.max(0)]],
            'joueurDonneur': ['', [Validators.required]],
            'joueurPreneur': ['', []]
          }
      )
  }

  ngOnInit() {
    console.log(this.joueurs);
  }

  public joueurNext() {
    this.resultat.somme = this.joueurFormGroup.get('somme').value;
    this.resultat.utilisateurDonneur = this.joueurs.find(e => e.idUtilisateur === parseInt(this.joueurFormGroup.get('joueurDonneur').value));
    this.resultat.utilisateurPreneur = this.joueurs.find(e => e.idUtilisateur === parseInt(this.joueurFormGroup.get('joueurPreneur').value));
    this.resultat.position = this.position;
    this.eventJoueurNext.emit(this.resultat);
  }

}
