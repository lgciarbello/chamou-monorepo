import {PerguntaResposta} from "./pergunta-resposta.interface";

export interface AvaliacaoResponse {
  id: string;
  comandaId: string;
  perguntasRespostas: PerguntaResposta[];
}
