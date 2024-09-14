import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {PedidoCreateRequest} from "../interfaces/pedido/pedido-create-request.interface";
import {PedidoCreateResponse} from "../interfaces/pedido/pedido-create-response.interface";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl: string = `${environment.apiUrl}/pedido`;

  constructor(private _http: HttpClient) {}

  create(pedido: PedidoCreateRequest): Observable<PedidoCreateResponse> {
    return this._http.post<PedidoCreateResponse>(this.baseUrl, pedido);
  }


}
