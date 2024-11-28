import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Pergunta} from "../interfaces/avaliacao/pergunta.interface";
import {AvaliacaoRequest} from "../interfaces/avaliacao/avaliacao-request.interface";
import {AvaliacaoResponse} from "../interfaces/avaliacao/avaliacao-response.interface";

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl: string = `${environment.apiUrl}/avaliacao`;

  constructor(private _http: HttpClient) {}

  create(avaliacao: AvaliacaoRequest): Observable<AvaliacaoResponse> {
    return this._http.post<AvaliacaoResponse>(this.baseUrl, avaliacao);
  }

  listPerguntas(): Observable<Pergunta[]> {
    return this._http.get<Pergunta[]>(`${this.baseUrl}/pergunta/list`);
  }
}
