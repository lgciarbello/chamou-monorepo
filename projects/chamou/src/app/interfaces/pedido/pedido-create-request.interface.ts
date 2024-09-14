import {ItemPedido} from "../item/item-pedido.interface";

export interface PedidoCreateRequest {
  comandaId: string;
  precoTotal: number;
  itens: ItemPedido[];
}
