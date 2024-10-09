import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";

export interface ItemModeloRequest {
  nome: string;
  descricao: string;
  preco: number;
  categoria: IdNameMap;
}
