import {ItemPedido} from "./item-pedido.interface";

export interface ItemComanda extends ItemPedido{
  nome: string;
  preco: number;
}
