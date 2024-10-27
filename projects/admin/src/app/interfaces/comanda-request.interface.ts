import {IdNameMap} from "../../../../chamou/src/app/interfaces/generic/id-name-map.interface";

export interface ComandaRequest {
  id?: string;
  cliente: string;
  mesa: IdNameMap;
}
