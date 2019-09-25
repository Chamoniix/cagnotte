import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partie } from '../model/partie.model';
import { map } from 'rxjs/operators';
import {Constantes} from "../constantes/constantes.model";


@Injectable({providedIn: 'root'})
export class PartieService {

    constructor(private http: HttpClient) {
    }

    public getAllParties(): Observable<Partie[]> {
        return this.http.get(Constantes.URL + 'partie').pipe(
            map((resp: Partie[]) => {
                    let parties = [];
                    resp.forEach(p => {
                        parties.push(new Partie(p));
                    });
                    return parties;
                }
            )
        );
    }

    public addPartie(partie: Partie) {
        return this.http.post(Constantes.URL + 'partie', partie);
    }
}