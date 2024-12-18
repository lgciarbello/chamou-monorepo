import {Injectable} from "@angular/core";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LocalStorageService} from "../../../../chamou/src/app/services/localstorage.service";
import {Observable} from "rxjs";
import {AvaliacaoTotal} from "../interfaces/avaliacao-total.interface";
import {PerguntaPontuacao} from "../interfaces/pergunta-pontuacao.interface";
import {AvaliacaoCliente} from "../interfaces/avaliacao-cliente.interface";
import {Avaliacao} from "../interfaces/avaliacao.interface";

@Injectable({
  providedIn: 'root'
})
export class AvaliacaoService {

  private baseUrl: string = `${environment.apiUrl}/avaliacao`;

  constructor(private readonly http: HttpClient,
              private readonly localstorageService: LocalStorageService) {}

  get(avaliacaoId: string): Observable<Avaliacao> {
    return this.http.get<Avaliacao>(`${this.baseUrl}/${avaliacaoId}`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  list(): Observable<AvaliacaoCliente[]> {
    return this.http.get<AvaliacaoCliente[]>(`${this.baseUrl}/list`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }

  mediaTotal(): Observable<AvaliacaoTotal> {
    return this.http.get<AvaliacaoTotal>(`${this.baseUrl}/media-total`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    });
  }

  pontuacaoPerguntas(): Observable<PerguntaPontuacao[]> {
    return this.http.get<PerguntaPontuacao[]>(`${this.baseUrl}/pergunta/pontuacao`, {
      headers: {
        'Authorization': 'Bearer ' + this.localstorageService.getItem("chamou-token")
      }
    })
  }
}
