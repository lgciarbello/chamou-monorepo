import {PerguntaResposta} from "./pergunta-resposta.interface";

export interface AvaliacaoRequest {
  comandaId: string;
  perguntasRespostas: PerguntaResposta[];
  comentario: string;
}
