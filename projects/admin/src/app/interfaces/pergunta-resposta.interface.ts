import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {Resposta} from "./resposta.interface";

export interface PerguntaResposta {
  id: string;
  pergunta: IdNameMap;
  resposta: Resposta;
}
