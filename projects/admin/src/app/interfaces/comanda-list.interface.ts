import {ComandaStatus} from "../constants/comanda-status.enum";
import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";

export interface ComandaList {
  id: string;
  cliente: string;
  status: ComandaStatus;
  mesa: IdNameMap;
}
