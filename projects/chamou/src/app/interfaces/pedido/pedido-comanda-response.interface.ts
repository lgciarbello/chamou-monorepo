import {ItemComanda} from "../item/item-comanda.interface";
import {PedidoStatus} from "../../constants/pedido.status.enum";

export interface PedidoComandaResponse {
  comandaId: string;
  precoTotal: number;
  status: PedidoStatus;
  itens: ItemComanda[];
}
