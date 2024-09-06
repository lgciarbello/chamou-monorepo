import {Injectable} from "@angular/core";
import {MatDialog, MatDialogConfig, MatDialogRef} from "@angular/material/dialog";
import {ComponentType} from "@angular/cdk/overlay";
import {ItemModalComponent} from "../components/modals/item-modal/item-modal.component";
import {ItemModalInput} from "../interfaces/modal/item-modal-input.interface";
import {GenericModalComponent} from "../components/modals/generic-modal/generic-modal.component";
import {GenericModalInput} from "../interfaces/modal/generic-modal-input.interface";
import {AlertModalInput} from "../interfaces/modal/alert-modal-input.interface";
import {AlertModalComponent} from "../components/modals/alert-modal/alert-modal.component";
import {CarrinhoModalInput} from "../interfaces/modal/carrinho-modal-input.interface";
import {CarrinhoModalComponent} from "../components/modals/carrinho-modal/carrinho-modal.component";

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

  openAlertModal(data: AlertModalInput): MatDialogRef<AlertModalComponent, boolean> {
    return this.openAny(AlertModalComponent, data);
  }

  openCarrinhoModal(data: CarrinhoModalInput): MatDialogRef<CarrinhoModalComponent> {
    return this.openAny(CarrinhoModalComponent, data);
  }

  openGenericModal(data: GenericModalInput): MatDialogRef<GenericModalComponent> {
    return this.openAny(GenericModalComponent, data);
  }

  closeAll() {
    this._matDialogService.closeAll();
  }


}
