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
  backButtonRoute: string = "../..";
  protected readonly PedidoStatus = PedidoStatus;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly pedidoService: PedidoService) {}

  ngOnInit() {
    this.route.url.subscribe(urlSegments => {
      const urlLength = urlSegments.filter(urlSegment => urlSegment.path === 'historico').length;

      if (urlLength) {
        this.backButtonRoute = '..';
      }
    })
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

  prepararPedido() {
    if (this.pedido) {
      this.pedidoService.preparar(this.pedido.id).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['../..'], { relativeTo: this.route });
        }
      })
    }
  }

  finalizarPreparo() {
    if (this.pedido) {
      this.pedidoService.finalizar(this.pedido.id).subscribe({
        next: (response) => {
          console.log(response);
          this.ngOnInit();
          // this.router.navigate(['../..'], { relativeTo: this.route });
        }
      })
    }
  }

  entregarPedido() {
    if (this.pedido) {
      this.pedidoService.entregar(this.pedido.id).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['../..'], { relativeTo: this.route });
        }
      })
    }
  }

  cancelarPedido() {
    if (this.pedido) {
      this.pedidoService.cancelar(this.pedido.id).subscribe({
        next: (response) => {
          console.log(response);
          this.router.navigate(['../..'], { relativeTo: this.route });
        }
      })
    }
  }
}
