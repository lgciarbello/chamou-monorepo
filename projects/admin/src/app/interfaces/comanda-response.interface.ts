import {ComandaList} from "./comanda-list.interface";
import {PedidoComandaResponse} from "./pedido-comanda-response.interface";

export interface ComandaResponse extends ComandaList {
  pedidos: PedidoComandaResponse[];
}
