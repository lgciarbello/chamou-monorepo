import {ItemComanda} from "../item/item-comanda.interface";
import {PedidoStatus} from "../../constants/pedido.status.enum";

export interface PedidoComandaResponse {
  numero: number;
  comandaId: string;
  precoTotal: number;
  status: PedidoStatus;
  tempoEspera: number;
  itens: ItemComanda[];
}
