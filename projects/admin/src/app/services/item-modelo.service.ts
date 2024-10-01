import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment.development";
import {Observable} from "rxjs";
import {ItemModeloResponse} from "../interfaces/item-modelo-response.interface";

@Injectable({
  providedIn: 'root'
})
export class ItemModeloService {

  private baseUrl: string = `${environment.apiUrl}/item-modelo`;
  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJpYXQiOjE3Mjc3NDUyODQsImV4cCI6MTcyNzc0NjcyNH0.I5f00P9AosMxC6Aurk_yGPYJaKg6KRFHs_js_ZroHDs";

  constructor(private _http: HttpClient) {}

  list(): Observable<ItemModeloResponse[]> {
    return this._http.get<ItemModeloResponse[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.token
      }
    });
  }
}
