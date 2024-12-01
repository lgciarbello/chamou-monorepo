import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Notificacao} from "../interfaces/notificacao.interface";
import {environment} from "../../environments/environment";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";

@Injectable({
  providedIn: "root",
})
export class NotificacaoService {

  private baseUrl: string = `${environment.apiUrl}/notificacao`;

  constructor(private readonly _http: HttpClient,
              private readonly localStorageService: LocalStorageService) {}

  list(): Observable<Notificacao[]> {
    return this._http.get<Notificacao[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localStorageService.getItem("chamou-token")
      }
    });
  }
}
