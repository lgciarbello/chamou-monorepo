import {ItemModelo} from "./item-modelo.interface";

export interface CategoriaCardapio {
  id: string;
  nome: string;
  itensModelo: ItemModelo[];
}
