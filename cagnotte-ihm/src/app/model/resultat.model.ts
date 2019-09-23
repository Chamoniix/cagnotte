import { assign } from 'lodash';
import { Utilisateur } from './utilisateur.model';

export interface ResultatDTO {
  idResultat: number;
  somme: number;
  utilisateurDonneur: Utilisateur;
  utilisateurPreneur: Utilisateur;
  position: number;
}

export class Resultat {
  public idResultat: number;
  public somme: number;
  public utilisateurDonneur: Utilisateur;
  public utilisateurPreneur: Utilisateur;
  public position: number;

  constructor(resultatDTO: Partial<ResultatDTO>) {
    assign(this, resultatDTO);
  }
}