import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {CarrinhoModalInput} from "../../../interfaces/modal/carrinho-modal-input.interface";
import {LocalStorageService} from "../../../services/localstorage.service";
import {ItemModalOutput} from "../../../interfaces/modal/item-modal-output.interface";

@Component({
  selector: 'app-carrinho-modal',
  templateUrl: './carrinho-modal.component.html',
  styleUrl: './carrinho-modal.component.scss'
})
export class CarrinhoModalComponent implements OnInit {

  preco: number = 0;

  constructor(private readonly dialogRef: MatDialogRef<CarrinhoModalComponent>,
              private readonly _localstorage: LocalStorageService,
              @Inject(MAT_DIALOG_DATA) public data: CarrinhoModalInput) {
  }

  ngOnInit() {
    this.initPreco();

    console.log(this.data.carrinho);
  }

  initPreco() {
    this.preco = this.data.carrinho.itens
      .reduce((accumulator, item) => accumulator + (item.preco * item.quantidade), 0);
  }

  onCartItemEdit(event: ItemModalOutput, index: number) {
    this.preco -= event.preco * (this.data.carrinho.itens[index].quantidade - event.quantidade);
    this.data.carrinho.itens[index] = event;
    this._localstorage.setItem("chamou.carrinho", this.data.carrinho);
  }

  onCartItemDelete(index: number) {
    this.preco -= this.data.carrinho.itens[index].quantidade * this.data.carrinho.itens[index].preco;
    this.data.carrinho.itens.splice(index, 1);
    this._localstorage.setItem("chamou.carrinho", this.data.carrinho);
  }

}
