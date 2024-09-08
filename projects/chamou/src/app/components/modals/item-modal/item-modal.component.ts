import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemModalInput} from "../../../interfaces/modal/item-modal-input.interface";
import {ItemModalOutput} from "../../../interfaces/modal/item-modal-output.interface";

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss'
})
export class ItemModalComponent implements OnInit {
  @Input() public customizacoes: string[] = [];
  @Input() public imagePath: string = '/assets/img/bolinho.jpg';

  hasCustomizations: boolean = false;

  constructor(private readonly dialogRef: MatDialogRef<ItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ItemModalInput) {
  }

  ngOnInit() {
   this.updateCustomizations();
  }

  updateCustomizations() {
    this.hasCustomizations = this.customizacoes.length !== 0;
  }

  addIntoCart() {
    if (this.data.quantidade <= 0) {
      //TODO tratar erro
      return;
    }

    const output: ItemModalOutput = {
      itemModeloId: this.data.itemModeloId,
      titulo: this.data.titulo,
      preco: this.data.preco,
      descricao: this.data.descricao,
      imagePath: this.imagePath,
      customizacoes: this.customizacoes,
      quantidade: this.data.quantidade,
    } as ItemModalOutput;

    this.dialogRef.close(output);
  }
}

