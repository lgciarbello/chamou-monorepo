import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {MesaResponse} from "../interfaces/mesa/mesa-response.interface";

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private baseUrl: string = `${environment.apiUrl}/mesa`;

  constructor(private _http: HttpClient) {}

  get(mesaId: string): Observable<MesaResponse> {
    return this._http.get<MesaResponse>(`${this.baseUrl}/${mesaId}`);
  }
}
