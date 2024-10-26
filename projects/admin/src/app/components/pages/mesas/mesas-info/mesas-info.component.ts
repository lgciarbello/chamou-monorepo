import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MesaService} from "../../../../services/mesa.service";
import {lastValueFrom} from "rxjs";
import {MesaResponse} from "../../../../interfaces/mesa-response.interface";
import {ComandaResponse} from "../../../../interfaces/comanda-response.interface";
import {ComandaStatus} from "../../../../constants/comanda-status.enum";

@Component({
  selector: 'app-mesas-info',
  templateUrl: './mesas-info.component.html',
  styleUrl: './mesas-info.component.scss'
})
export class MesasInfoComponent implements OnInit {

  mesa!: MesaResponse | null;
  comanda1 = {
    cliente: 'João',
    status: ComandaStatus.ABERTA
  } as ComandaResponse;
  comanda2 = {
    cliente: 'Ricardo',
    status: ComandaStatus.FECHADA
  } as ComandaResponse;

  constructor(private readonly route: ActivatedRoute,
              private readonly mesaService: MesaService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        lastValueFrom(this.mesaService.get(params['id'])).then(mesa => {
          if (mesa) {
            this.mesa = mesa;
          }
        });
      }
    })
  }

  onComandaClick(comndaId: string) {

  }
}
