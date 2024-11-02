import {PedidoStatus} from "../../../../chamou/src/app/constants/pedido.status.enum";
import {ItemComanda} from "../../../../chamou/src/app/interfaces/item/item-comanda.interface";
import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";

export interface PedidoComandaResponse {
  id: string;
  itens: ItemComanda[];
  status: PedidoStatus;
  mesa: IdNameMap;
  precoTotal: number;
}
