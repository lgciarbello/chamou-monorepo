import {Component, Input, OnInit} from '@angular/core';
import {list} from "postcss";

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

  ngOnInit() {
   this.updateCustomizations();
  }

  updateCustomizations() {
    this.hasCustomizations = this.customizacoes.length !== 0;
  }
}

