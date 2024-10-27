import {MesaStatus} from "../constants/mesa-status.enum";
import {ComandaList} from "./comanda-list.interface";

export interface MesaResponse {
  id: string;
  numero: string;
  status: MesaStatus;
  comandas: ComandaList[];
}
