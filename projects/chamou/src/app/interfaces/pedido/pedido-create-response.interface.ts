import {ItemPedido} from "../item/item-pedido.interface";

export interface PedidoCreateResponse {
  numero: number;
  comandaId: string;
  precoTotal: number;
  itens: ItemPedido[];
}
