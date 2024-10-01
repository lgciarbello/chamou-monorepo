import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";

export interface ItemModeloResponse {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  foto: string;
  categoria: IdNameMap;
}
