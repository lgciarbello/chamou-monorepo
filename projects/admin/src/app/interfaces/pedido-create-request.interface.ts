import {ItemPedido} from "./item-pedido.interface";

export interface PedidoCreateRequest {
  id?: string;
  comandaId: string;
  precoTotal: number;
  itens: ItemPedido[];
}
