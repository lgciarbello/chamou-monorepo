import {IconProp} from "@fortawesome/fontawesome-svg-core";

export interface CategoriaRequest {
  id?: string;
  nome: string;
  icone: IconProp;
  ordem?: number;
}
