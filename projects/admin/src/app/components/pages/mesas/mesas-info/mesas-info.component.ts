import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MesaService} from "../../../../services/mesa.service";
import {lastValueFrom} from "rxjs";
import {MesaResponse} from "../../../../interfaces/mesa-response.interface";

@Component({
  selector: 'app-mesas-info',
  templateUrl: './mesas-info.component.html',
  styleUrl: './mesas-info.component.scss'
})
export class MesasInfoComponent implements OnInit {

  mesa!: MesaResponse | null;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
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

  onComandaClick(comandaId: string) {
    if (comandaId) {
      this.router.navigate(['/comandas/comanda', comandaId]);
    }

  }
}
