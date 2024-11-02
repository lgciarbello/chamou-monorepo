import {ItemPedido} from "./item-pedido.interface";

export interface PedidoCreateResponse {
  comandaId: string;
  precoTotal: number;
  itens: ItemPedido[];
}
