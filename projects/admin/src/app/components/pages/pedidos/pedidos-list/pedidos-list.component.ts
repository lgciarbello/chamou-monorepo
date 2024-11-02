import {Component, OnInit} from '@angular/core';
import {PedidoComandaResponse} from "../../../../interfaces/pedido-comanda-response.interface";
import {PedidoService} from "../../../../services/pedido.service";

@Component({
  selector: 'app-pedidos-list',
  templateUrl: './pedidos-list.component.html',
  styleUrl: './pedidos-list.component.scss'
})
export class PedidosListComponent implements OnInit{

  pedidos!: PedidoComandaResponse[];

  constructor(private readonly pedidoService: PedidoService) {}

  ngOnInit() {
    this.pedidoService.list().subscribe(pedidos => {
      console.log(pedidos);
      this.pedidos = pedidos;
    })
  }

}
