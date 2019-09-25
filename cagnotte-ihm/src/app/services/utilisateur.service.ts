import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Constantes } from "../constantes/constantes.model";
import { Utilisateur } from "../model/utilisateur.model";


@Injectable({providedIn: 'root'})
export class UtilisateurService {

    constructor(private http: HttpClient) {
    }

    public getAllUtilisateurs(): Observable<Utilisateur[]> {
        return this.http.get(Constantes.URL + 'utilisateur').pipe(
            map((resp: Utilisateur[]) => {
                    let utilisateurs = [];
                    resp.forEach(u => {
                        utilisateurs.push(new Utilisateur(u));
                    });
                    return utilisateurs;
                }
            )
        );
    }
}