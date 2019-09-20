import { assign } from 'lodash'

export interface UtilisateurDTO {
  nom: string;
  prenom: string;
}

export class Utilisateur {
  public nom: string;
  public prenom: string;

  constructor(utilisateurDTO: Partial<UtilisateurDTO>) {
    assign(this, utilisateurDTO);
  }
}