import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {ItemModeloResponse} from "../interfaces/item-modelo-response.interface";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {ItemModeloRequest} from "../interfaces/item-modelo.request.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemModeloService {

  private baseUrl: string = `${environment.apiUrl}/item-modelo`;
  constructor(private _http: HttpClient,
              private readonly localstorageService: LocalStorageService) {}

  create(request: ItemModeloRequest): Observable<ItemModeloResponse> {

    console.log(this.baseUrl);

    return this._http.post<ItemModeloResponse>(this.baseUrl, request, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token"),
        'Content-Type': 'application/json',
      }
    });
}

  list(): Observable<ItemModeloResponse[]> {
    return this._http.get<ItemModeloResponse[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }
}
