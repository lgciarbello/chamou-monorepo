import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {CategoriaResponse} from "../interfaces/categoria/categoria-response-interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = `${environment.apiUrl}/chamou/categoria`;

  constructor(private readonly _http: HttpClient) {}

  list(): Observable<CategoriaResponse[]> {
    return this._http.get<CategoriaResponse[]>(`${this.baseUrl}/list`);
  }

}