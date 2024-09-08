import {Item} from "../item/item.interface";

export interface PedidoResponse {
  comandaId: string;
  itens: Item[];
}
