import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {AuthenticationRequest} from "../interfaces/authentication-request.interface";
import {environment} from "../../environments/environment.development";
import {map, Observable} from "rxjs";
import {AuthenticationResponse} from "../interfaces/authentication-response.interface";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {AuthenticationVerify} from "../interfaces/authentication-verify.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private baseUrl: string = `${environment.apiUrl}/api/auth`;
  // logado: boolean;

  constructor(private _http: HttpClient,
              private readonly localstorageService: LocalStorageService) {}

  login(request: AuthenticationRequest): Observable<AuthenticationResponse> {
    return this._http.post<AuthenticationResponse>(this.baseUrl + "/login", request).pipe(
      map(response => {
        this.localstorageService.setItem('chamou-token', response.token);
        return response;
      }),
    );
  }

  verifyToken(): Observable<AuthenticationVerify> {
    const token: string = this.localstorageService.getItem('chamou-token');
    const authorizationHeader = new HttpHeaders().set("Authorization", "Bearer " + token);

    return this._http.get<AuthenticationVerify>(this.baseUrl + "/verify-token", {
      headers: authorizationHeader
    });
  }


}
