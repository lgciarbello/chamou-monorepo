import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CardapioResponse} from "../interfaces/cardapio-response.interface";

@Injectable({
  providedIn: 'root'
})
export class CardapioService {

  constructor(private readonly _http: HttpClient) {}

  getAll() : Observable<CardapioResponse> {
    return this._http.get<CardapioResponse>('http://localhost:8080/chamou/cardapio');
  }
}
