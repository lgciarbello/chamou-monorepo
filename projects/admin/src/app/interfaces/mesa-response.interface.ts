import {MesaStatus} from "../constants/mesa-status.enum";
import {ComandaResponse} from "./comanda-response.interface";

export interface MesaResponse {
  id: string;
  numero: string;
  status: MesaStatus;
  comandas: ComandaResponse[];
}
