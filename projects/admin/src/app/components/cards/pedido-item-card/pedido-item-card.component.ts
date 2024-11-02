import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ItemComanda} from "../../../interfaces/item-comanda.interface";

@Component({
  selector: 'app-pedido-item-card',
  templateUrl: './pedido-item-card.component.html',
  styleUrl: './pedido-item-card.component.scss'
})
export class PedidoItemCardComponent {
  @Input({ required: true }) item!: ItemComanda;

  @Output('clicked') public click = new EventEmitter<string>();
}
