import {Injectable} from "@angular/core";
import {environment} from "../../../../chamou/src/environments/environment.development";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PedidoComandaResponse} from "../interfaces/pedido-comanda-response.interface";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {PedidoCreateRequest} from "../interfaces/pedido-create-request.interface";
import {PedidoCreateResponse} from "../interfaces/pedido-create-response.interface";
import {PedidoResponse} from "../interfaces/pedido-response.interface";
import {PedidoStatus} from "../../../../chamou/src/app/constants/pedido.status.enum";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private baseUrl: string = `${environment.apiUrl}/pedido`;

  constructor(private readonly http: HttpClient,
              private readonly localstorageService: LocalStorageService) { }

  get(pedidoId: string): Observable<PedidoResponse> {
    return this.http.get<PedidoResponse>(`${this.baseUrl}/${pedidoId}`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  create(pedido: PedidoCreateRequest): Observable<PedidoCreateResponse> {
    return this.http.post<PedidoCreateResponse>(this.baseUrl, pedido);
  }

  update(pedido: PedidoCreateRequest): Observable<PedidoCreateResponse> {
    console.log(`${this.baseUrl}/${pedido.id}`);
    return this.http.put<PedidoCreateResponse>(`${this.baseUrl}/${pedido.id}`, pedido, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token"),
      }
    });
  }

  list(): Observable<PedidoComandaResponse[]> {
    return this.http.get<PedidoComandaResponse[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  historico(): Observable<PedidoComandaResponse[]> {
    return this.http.get<PedidoComandaResponse[]>(`${this.baseUrl}/historico`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  preparar(pedidoId: string): Observable<PedidoCreateResponse> {
    return this.http.put<PedidoCreateResponse>(
      `${this.baseUrl}/${pedidoId}/atualizar-status/${PedidoStatus.PREPARANDO}`, {}, {
        headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  finalizar(pedidoId: string): Observable<PedidoCreateResponse> {
    return this.http.put<PedidoCreateResponse>(
      `${this.baseUrl}/${pedidoId}/atualizar-status/${PedidoStatus.PRONTO}`, {}, {
        headers: {
          'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
        }
    })
  }

  entregar(pedidoId: string): Observable<PedidoCreateResponse> {
    return this.http.put<PedidoCreateResponse>(
      `${this.baseUrl}/${pedidoId}/atualizar-status/${PedidoStatus.ENTREGUE}`, {}, {
        headers: {
          'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
        }
      })
  }

  cancelar(pedidoId: string): Observable<PedidoCreateResponse> {
    return this.http.put<PedidoCreateResponse>(
      `${this.baseUrl}/${pedidoId}/atualizar-status/${PedidoStatus.CANCELADO}`, {}, {
        headers: {
          'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
        }
      })
  }
}
