import { assign } from 'lodash';
import { Utilisateur } from './utilisateur.model';

export interface ResultatDTO {
  id: number;
  somme: number;
  joueurDonneur: Utilisateur;
  joueurPreneur: Utilisateur;
  position: number;
}

export class Resultat {
  public id: number;
  public somme: number;
  public joueurDonneur: Utilisateur;
  public joueurPreneur: Utilisateur;
  public position: number;

  constructor(resultatDTO: Partial<ResultatDTO>) {
    assign(this, resultatDTO);
  }
}