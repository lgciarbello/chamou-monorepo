import {PedidoStatus} from "../../../../chamou/src/app/constants/pedido.status.enum";
import {ItemComanda} from "../../../../chamou/src/app/interfaces/item/item-comanda.interface";

export interface PedidoComandaResponse {
  id: string;
  itens: ItemComanda[];
  status: PedidoStatus;
  precoTotal: number;
}
