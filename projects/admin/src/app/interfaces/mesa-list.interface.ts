import {MesaStatus} from "../constants/mesa-status.enum";

export interface MesaList {
  id: string;
  numero: string;
  status: MesaStatus;
}
