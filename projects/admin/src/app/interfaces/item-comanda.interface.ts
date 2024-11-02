import {ItemPedido} from "./item-pedido.interface";
import {CategoriaResponse} from "./categoria-response.interface";

export interface ItemComanda extends ItemPedido {
  id: string;
  nome: string;
  preco: number;
  categoria: CategoriaResponse
}
