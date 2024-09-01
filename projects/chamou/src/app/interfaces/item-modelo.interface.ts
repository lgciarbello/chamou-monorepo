import {IdNameMap} from "./id-name-map.interface";

export interface ItemModelo {
  id?: string;
  nome: string;
  descricao: string;
  preco: number;
  foto?: string;
  categoria?: IdNameMap;
}
