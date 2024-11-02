import {Component, OnInit} from '@angular/core';
import {PedidoService} from "../../../../services/pedido.service";
import {PedidoComandaResponse} from "../../../../interfaces/pedido-comanda-response.interface";

@Component({
  selector: 'app-pedidos-history',
  templateUrl: './pedidos-history.component.html',
  styleUrl: './pedidos-history.component.scss'
})
export class PedidosHistoryComponent implements OnInit {

  pedidos!: PedidoComandaResponse[];

  constructor(private pedidoService: PedidoService) { }

  ngOnInit() {
    this.pedidoService.historico().subscribe(pedidos => {
      this.pedidos = pedidos;
    });
  }

}
