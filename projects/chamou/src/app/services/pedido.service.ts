import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {PedidoRequest} from "../interfaces/pedido/pedido-request.interface";
import {PedidoResponse} from "../interfaces/pedido/pedido-response.interface";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl: string = `${environment.apiUrl}/pedido`;

  constructor(private _http: HttpClient) {}

  create(pedido: PedidoRequest): Observable<PedidoResponse> {
    return this._http.post<PedidoResponse>(this.baseUrl, pedido);
  }


}
