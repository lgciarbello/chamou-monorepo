import {Component, Input, OnInit} from '@angular/core';
import {PedidoStatus} from "../../constants/pedido.status.enum";
import {PedidoComandaResponse} from "../../interfaces/pedido/pedido-comanda-response.interface";
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-card-pedido',
  templateUrl: './card-pedido.component.html',
  styleUrl: './card-pedido.component.scss'
})
export class CardPedidoComponent implements OnInit{
  @Input({ required: true }) public titulo!: string;
  @Input({ required: true }) public pedido!: PedidoComandaResponse;

  protected readonly PedidoStatus = PedidoStatus;

  constructor(private readonly titlePipe: TitleCasePipe) {
  }

  ngOnInit() {
    console.log(this.pedido);
  }

  onClick() {

  }
}
