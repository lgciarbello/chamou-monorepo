import {Item} from "../item/item.interface";

export interface PedidoRequest {
  comandaId: string;
  itens: Item[];
}
