import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ItemModalInput} from "../../interfaces/modal/item-modal-input.interface";

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss'
})
export class ItemModalComponent implements OnInit {
  @Input({required: true}) public id!: string;
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public descricao: string = '';
  @Input({required: true}) public quantidade: number = 0.00;

  @Input() public customizacoes: string[] = [];
  @Input() public imagePath: string = '/assets/img/bolinho.jpg';

  hasCustomizations: boolean = false;

  constructor(private readonly dialogRef: MatDialogRef<ItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: ItemModalInput) {
    this.insertDataIntoComponent(data);
  }

  ngOnInit() {
   this.updateCustomizations();
  }

  updateCustomizations() {
    this.hasCustomizations = this.customizacoes.length !== 0;
  }

  insertDataIntoComponent(data: ItemModalInput) {
    this.titulo = data.titulo;
    this.descricao = data.descricao;
    this.preco = data.preco;
    this.imagePath = data.imagePath;
  }

  addIntoCart() {
    if (this.quantidade <= 0) {
      //TODO tratar erro
      return;
    }

    const itemModalInput: ItemModalInput = {
      id: this.id,
      titulo: this.titulo,
      preco: this.preco,
      descricao: this.descricao,
      imagePath: this.imagePath,
      customizacoes: this.customizacoes,
      quantidade: this.quantidade,
    } as ItemModalInput;

    this.dialogRef.close(itemModalInput);
  }
}

