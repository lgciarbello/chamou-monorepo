import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {LocalStorageService} from "../../../services/localstorage.service";
import {ComandaModalInput} from "../../../interfaces/modal/comanda-modal-input.interface";
import {ComandaService} from "../../../services/comanda.service";
import {lastValueFrom, Observable} from "rxjs";
import {PedidoComandaResponse} from "../../../interfaces/pedido/pedido-comanda-response.interface";
import {AlertModalInput} from "../../../interfaces/modal/alert-modal-input.interface";
import {ModalService} from "../../../services/modal.service";
import {Comanda} from "../../../interfaces/comanda/comanda.interface";

@Component({
  selector: 'app-comanda-modal',
  templateUrl: './comanda-modal.component.html',
  styleUrl: './comanda-modal.component.scss'
})
export class ComandaModalComponent implements OnInit{

  pedidos$!: Observable<PedidoComandaResponse[]>;

  constructor(private readonly dialogRef: MatDialogRef<ComandaModalComponent>,
              private readonly _comandaService: ComandaService,
              private readonly _localstorage: LocalStorageService,
              private readonly _modalService: ModalService,
              @Inject(MAT_DIALOG_DATA) public data: ComandaModalInput) {
  }

  ngOnInit() {
    if(this.data.comandaId) {
      this.pedidos$ = this._comandaService.getPedidos(this.data.comandaId);
    }
  }

  getPrecoTotal(pedidos: PedidoComandaResponse[]): number {
    return pedidos.reduce((accumulator, pedido) => accumulator + pedido.precoTotal, 0);
  }

  fecharComanda() {
    const data: AlertModalInput = {
      title: 'Fechar Comanda',
      icon: "question-circle",
      message: "Deseja fechar a sua comanda? \n\n (Após o fechamento, não será mais possível realizar pedidos nesta comanda.)",
      buttonAcceptText: "Confirmar",
      buttonDeclineText: "Cancelar",
    } as AlertModalInput;

    this._modalService.openAlertModal(data)
      .afterClosed().subscribe(isAccept => {
        if (isAccept) {
          lastValueFrom(this._comandaService.fecharComanda(this.data.comandaId))
            .then(() => this.dialogRef.close(true));
        }
    });
  }

}
