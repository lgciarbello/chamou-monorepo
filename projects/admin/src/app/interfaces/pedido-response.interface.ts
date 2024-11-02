import {PedidoStatus} from "../../../../chamou/src/app/constants/pedido.status.enum";
import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";
import {ComandaList} from "./comanda-list.interface";
import {ItemComanda} from "./item-comanda.interface";

export interface PedidoResponse {
  id: string;
  comanda: ComandaList;
  mesa: IdNameMap;
  itens: ItemComanda[];
  status: PedidoStatus;
  precoTotal: number;
}
