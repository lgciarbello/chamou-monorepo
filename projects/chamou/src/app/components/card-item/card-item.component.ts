import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemModelo} from "../../interfaces/item/item-modelo.interface";

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrl: './card-item.component.scss'
})
export class CardItemComponent {
  @Input({required: true}) public id!: string;
  @Input({required: true}) public titulo: string = '';
  @Input({required: true}) public preco: number = 0.00;
  @Input({required: true}) public descricao: string = '';
  @Input() public imageLink?: string = 'assets/img/default_banner.png';

  @Output("clicked") click = new EventEmitter<ItemModelo>();

  onClick() {
    const itemModelo: ItemModelo = {
      id: this.id,
      nome: this.titulo,
      preco: this.preco,
      descricao: this.descricao,
      foto: this.imageLink,
    }

    this.click.emit(itemModelo);
  }
}
