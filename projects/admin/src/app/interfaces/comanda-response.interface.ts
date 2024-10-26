import {ComandaStatus} from "../constants/comanda-status.enum";

export interface ComandaResponse {
  id: string;
  cliente: string;
  status: ComandaStatus;
}
