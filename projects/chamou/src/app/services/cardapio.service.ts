import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CardapioResponse} from "../interfaces/cardapio/cardapio-response.interface";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  private baseUrl: string = `${environment.apiUrl}/cardapio`;

  constructor(private readonly _http: HttpClient) {}

  getAll() : Observable<CardapioResponse> {
    return this._http.get<CardapioResponse>(this.baseUrl);
  }
}
