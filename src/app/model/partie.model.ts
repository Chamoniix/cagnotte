import * as moment from 'moment';
import { Moment } from 'moment';
import { assign } from 'lodash';
import { Resultat } from './resultat.model'

export interface PartieDTO {
  id: number;
  typePartie: string;
  date: Moment;
  resultats: Resultat[];
  nombreJoueurs: number;
}

export class Partie {
  public id: number;
  public typePartie: string;
  public date: Moment;
  public resultats: Resultat[];
  public nombreJoueurs: number;

  constructor(partieDTO: Partial<PartieDTO>) {
    assign(this, partieDTO);
  }
  
}