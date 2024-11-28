import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComandaList} from "../interfaces/comanda-list.interface";
import {environment} from "../../environments/environment";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {ComandaRequest} from "../interfaces/comanda-request.interface";
import {ComandaResponse} from "../interfaces/comanda-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ComandaService {

  private baseUrl: string = `${environment.apiUrl}/comanda`;

  constructor(private readonly http: HttpClient,
              private readonly localstorageService: LocalStorageService) { }

  getForEdit(comandaId: string): Observable<ComandaList> {
    return this.http.get<ComandaList>(`${this.baseUrl}/${comandaId}/getForEdit`, {
      headers: {
       'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  get(comandaId: string): Observable<ComandaResponse> {
    return this.http.get<ComandaResponse>(`${this.baseUrl}/${comandaId}`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  create(comanda: ComandaRequest): Observable<ComandaList> {
    return this.http.post<ComandaList>(`${this.baseUrl}`, comanda, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  update(comanda: ComandaRequest): Observable<ComandaList> {
    return this.http.put<ComandaList>(`${this.baseUrl}/${comanda.id}`, comanda, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  list(): Observable<ComandaList[]> {
    return this.http.get<ComandaList[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  historico(): Observable<ComandaList[]> {
    return this.http.get<ComandaList[]>(`${this.baseUrl}/historico`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  fechar(comandaId: string): Observable<ComandaList> {
    return this.http.put<ComandaList>(`${this.baseUrl}/${comandaId}/fechar`, null);
  }



}
