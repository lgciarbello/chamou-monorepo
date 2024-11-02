import {Component, EventEmitter, Input, Output} from '@angular/core';
import {PedidoComandaResponse} from "../../../interfaces/pedido-comanda-response.interface";

@Component({
  selector: 'app-pedido-card',
  templateUrl: './pedido-card.component.html',
  styleUrl: './pedido-card.component.scss'
})
export class PedidoCardComponent {

  @Input({ required: true }) public pedido!: PedidoComandaResponse;
  @Input({ required: true }) public index!: number;
  @Input() public mostrarPreco: boolean = true;

  @Output('cardClicked') cardClicked = new EventEmitter<string>();

  onCardClick() {
    if (this.pedido) {
      this.cardClicked.emit(this.pedido.id);
    }

  }
}
