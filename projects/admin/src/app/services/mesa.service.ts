import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {Observable, of} from "rxjs";
import {MesaList} from "../interfaces/mesa-list.interface";
import {MesaResponse} from "../interfaces/mesa-response.interface";
import {MesaRequest} from "../interfaces/mesa-request.interface";

@Injectable({
  providedIn: 'root'
})
export class MesaService {

  private baseUrl: string = `${environment.apiUrl}/mesa`;

  constructor(private readonly http: HttpClient,
              private readonly localstorageService: LocalStorageService) {}

  create(mesa: MesaRequest): Observable<MesaResponse> {
    return this.http.post<MesaResponse>(`${this.baseUrl}`, mesa, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  get(mesaId: string): Observable<MesaResponse> {
    return this.http.get<MesaResponse>(`${this.baseUrl}/${mesaId}`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  update(mesa: MesaRequest): Observable<MesaResponse> {
    return this.http.put<MesaResponse>(`${this.baseUrl}/${mesa.id}`, mesa, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  list(): Observable<MesaList[]> {
    return this.http.get<MesaList[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

}
