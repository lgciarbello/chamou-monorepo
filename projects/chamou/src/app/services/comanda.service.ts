import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Comanda} from "../interfaces/comanda/comanda.interface";
import {Injectable} from "@angular/core";
import {PedidoComandaResponse} from "../interfaces/pedido/pedido-comanda-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private baseUrl: string = `${environment.apiUrl}/comanda`;

  constructor(private _http: HttpClient) {}

  create(comanda: Comanda): Observable<Comanda> {
    return this._http.post<Comanda>(this.baseUrl, comanda);
  }

  getPedidos(comandaId: string): Observable<PedidoComandaResponse[]> {
    return this._http.get<PedidoComandaResponse[]>(this.baseUrl + `/${comandaId}/pedidos`);
  }

  fecharComanda(comandaId: string): Observable<PedidoComandaResponse[]> {
    return this._http.put<PedidoComandaResponse[]>(this.baseUrl + `/${comandaId}/fechar`, null);
  }
}
