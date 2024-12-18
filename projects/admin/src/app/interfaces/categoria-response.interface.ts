import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface CategoriaResponse {
  id: string;
  nome: string;
  icone: IconProp;
  ordem: number;
}
