import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarrinhoModalInput} from "../../../interfaces/modal/carrinho-modal-input.interface";
import {ItemModalInput} from "../../../interfaces/modal/item-modal-input.interface";
import {LocalStorageService} from "../../../services/localstorage.service";
@Component({
  selector: 'app-carrinho-modal',
  templateUrl: './carrinho-modal.component.html',
  styleUrl: './carrinho-modal.component.scss'
})
export class CarrinhoModalComponent {

  preco: number = 0;

  constructor(private readonly dialogRef: MatDialogRef<CarrinhoModalComponent>,
              private readonly _localstorage: LocalStorageService,
              @Inject(MAT_DIALOG_DATA) public data: CarrinhoModalInput) {
  }

  onCartItemEdit(event: ItemModalInput, index: number) {
    this.data.carrinho.itens[index] = event;
    this._localstorage.setItem("chamou.carrinho", this.data.carrinho);
  }

  onCartItemDelete(index: number) {
    this.data.carrinho.itens.splice(index, 1);
    this._localstorage.setItem("chamou.carrinho", this.data.carrinho);
  }


}
