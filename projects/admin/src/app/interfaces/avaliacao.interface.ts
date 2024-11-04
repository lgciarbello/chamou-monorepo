import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {PerguntaResposta} from "./pergunta-resposta.interface";

export interface Avaliacao {
  id: string;
  comanda: IdNameMap;
  perguntasRespostas: PerguntaResposta[];
  comentario: string;
}
