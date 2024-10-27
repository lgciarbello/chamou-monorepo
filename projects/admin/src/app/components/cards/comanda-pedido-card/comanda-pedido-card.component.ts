import {Component, Input, OnInit} from '@angular/core';
import {PedidoComandaResponse} from "../../../interfaces/pedido-comanda-response.interface";

@Component({
  selector: 'app-comanda-pedido-card',
  templateUrl: './comanda-pedido-card.component.html',
  styleUrl: './comanda-pedido-card.component.scss'
})
export class ComandaPedidoCardComponent {

  @Input({ required: true }) public pedido!: PedidoComandaResponse;
  @Input({ required: true }) public index!: number;

}
