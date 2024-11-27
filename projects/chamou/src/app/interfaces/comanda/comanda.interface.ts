import {IdNameMap} from "../generic/id-name-map.interface";

export interface Comanda {
  id: string;
  cliente: string;
  mesa: IdNameMap;
}
