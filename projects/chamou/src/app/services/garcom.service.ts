import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GarcomService {

  private baseUrl: string = `${environment.apiUrl}/garcom`;

  constructor(private _http: HttpClient) {}

  chamar(mesaId: string): Observable<void> {
    return this._http.get<void>(`${this.baseUrl}/chamar/${mesaId}`);
  }
}
