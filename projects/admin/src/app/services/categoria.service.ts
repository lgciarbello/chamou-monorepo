import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {CategoriaResponse} from "../interfaces/categoria-response.interface";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = `${environment.apiUrl}/categoria`;

  constructor(private _http: HttpClient) {}

  list(): Observable<CategoriaResponse[]> {
    return this._http.get<CategoriaResponse[]>(this.baseUrl + '/list');
  }
}
