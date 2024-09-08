import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {Comanda} from "../interfaces/comanda/comanda.interface";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private baseUrl: string = `${environment.apiUrl}/comanda`;

  constructor(private _http: HttpClient) {}

  create(comanda: Comanda): Observable<Comanda> {
    return this._http.post<Comanda>(this.baseUrl, comanda);
  }
}
