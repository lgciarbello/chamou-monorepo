import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {ItemModalComponent} from "../components/item-modal/item-modal.component";
import {ItemModalInput} from "../interfaces/modal/item-modal-input.interface";
import {GenericModalComponent} from "../components/generic-modal/generic-modal.component";
import {GenericModalInput} from "../interfaces/modal/generic-modal-input.interface";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private readonly _matDialogService: MatDialog) {}

  private openAny(component: ComponentType<any>, data: any): MatDialogRef<any> {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;
    dialogConfig.data = data;

    return this._matDialogService.open(component, dialogConfig);
  }

  openItemModal(data: ItemModalInput): MatDialogRef<ItemModalComponent, ItemModalInput> {
    return this.openAny(ItemModalComponent, data);
  }

  openGenericModal(data: GenericModalInput): MatDialogRef<GenericModalComponent> {
    return this.openAny(GenericModalComponent, data);
  }

  closeAll() {
    this._matDialogService.closeAll();
  }


}
