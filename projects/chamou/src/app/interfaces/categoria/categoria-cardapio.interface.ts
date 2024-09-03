import {ItemModelo} from "../item/item-modelo.interface";

export interface CategoriaCardapio {
  id: string;
  nome: string;
  itensModelo: ItemModelo[];
}
