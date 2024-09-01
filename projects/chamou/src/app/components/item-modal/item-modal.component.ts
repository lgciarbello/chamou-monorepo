import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-item-modal',
  templateUrl: './item-modal.component.html',
  styleUrl: './item-modal.component.scss'
})
export class ItemModalComponent implements OnInit {
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public descricao: string = '';
  @Input({required: true}) public quantidade: number = 0.00;

  @Input() public customizacoes: string[] = [];
  @Input() public imageLink: string = '/assets/img/bolinho.jpg';

  hasCustomizations: boolean = false;

  constructor(private readonly dialogRef: MatDialogRef<ItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.insertData(data);
  }

  ngOnInit() {
   this.updateCustomizations();
  }

  updateCustomizations() {
    this.hasCustomizations = this.customizacoes.length !== 0;
  }

  insertData(data: any) {
    this.titulo = data.nome;
    this.descricao = data.descricao;
    this.preco = data.preco;
    this.imageLink = data.foto;
  }
}

