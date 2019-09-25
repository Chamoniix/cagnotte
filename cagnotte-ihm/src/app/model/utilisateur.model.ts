import { assign } from 'lodash'

export interface UtilisateurDTO {
  idUtilisateur: number;
  nom: string;
  prenom: string;
}

export class Utilisateur {
  public idUtilisateur: number;
  public nom: string;
  public prenom: string;

  constructor(utilisateurDTO: Partial<UtilisateurDTO>) {
    assign(this, utilisateurDTO);
  }
}