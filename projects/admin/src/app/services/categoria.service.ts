import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {CategoriaResponse} from "../interfaces/categoria-response.interface";
import {Observable, of} from "rxjs";
import {Injectable} from "@angular/core";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {CategoriaRequest} from "../interfaces/categoria-request.interface";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseUrl: string = `${environment.apiUrl}/categoria`;

  constructor(private readonly _http: HttpClient,
              private readonly localstorageService: LocalStorageService) {}

  create(categoria: CategoriaRequest): Observable<CategoriaResponse> {
    return this._http.post<CategoriaResponse>(this.baseUrl, categoria, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  update(categoria: CategoriaRequest): Observable<CategoriaResponse> {
    return this._http.put<CategoriaResponse>(`${this.baseUrl}/${categoria.id}`, categoria, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }


  get(categoriaId: string): Observable<CategoriaResponse> {
    return this._http.get<CategoriaResponse>(`${this.baseUrl}/${categoriaId}`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  list(): Observable<CategoriaResponse[]> {
    return this._http.get<CategoriaResponse[]>(this.baseUrl + '/list');
  }
}
