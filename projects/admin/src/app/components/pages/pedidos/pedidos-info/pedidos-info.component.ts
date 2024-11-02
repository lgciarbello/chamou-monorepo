import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {ComandaStatus} from "../../../../constants/comanda-status.enum";
import {PedidoResponse} from "../../../../interfaces/pedido-response.interface";
import {PedidoService} from "../../../../services/pedido.service";
import {PedidoStatus} from "../../../../../../../chamou/src/app/constants/pedido.status.enum";

@Component({
  selector: 'app-pedidos-info',
  templateUrl: './pedidos-info.component.html',
  styleUrl: './pedidos-info.component.scss'
})
export class PedidosInfoComponent implements OnInit {

  pedido!: PedidoResponse | null;
  protected readonly PedidoStatus = PedidoStatus;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly pedidoService: PedidoService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        lastValueFrom(this.pedidoService.get(params['id'])).then(pedido => {
          if (pedido) {
            this.pedido = pedido;
            console.log(this.pedido);
          }
        });
      }
    });
  }

  protected readonly ComandaStatus = ComandaStatus;

  // fecharComanda() {
  //   if (this.pedido) {
  //     this.pedidoService.fechar(this.pedido.id).subscribe({
  //       next: (response) => {
  //         console.log(response);
  //         //TODO implements toast
  //         this.router.navigate(['../..'], { relativeTo: this.route });
  //       },
  //       error: (error) => {
  //         console.log(error);
  //         //TODO implements toast
  //       }
  //     })
  //   }
  // }
}
