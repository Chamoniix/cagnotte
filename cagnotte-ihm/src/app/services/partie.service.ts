import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partie } from '../model/partie.model';
import { map } from 'rxjs/operators';


@Injectable({providedIn: 'root'})
export class PartieService {

    private static URL = 'http://localhost:8081/';

    constructor(private http: HttpClient) {
    }

    public getAllParties(): Observable<Partie[]> {
        return this.http.get(PartieService.URL + 'partie').pipe(
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
}