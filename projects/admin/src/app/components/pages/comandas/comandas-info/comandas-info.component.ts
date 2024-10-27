import {Component, OnInit} from '@angular/core';
import {ComandaResponse} from "../../../../interfaces/comanda-response.interface";
import {ComandaService} from "../../../../services/comanda.service";
import {ActivatedRoute, Router} from "@angular/router";
import {lastValueFrom} from "rxjs";
import {ComandaStatus} from "../../../../constants/comanda-status.enum";

@Component({
  selector: 'app-comandas-info',
  templateUrl: './comandas-info.component.html',
  styleUrl: './comandas-info.component.scss'
})
export class ComandasInfoComponent implements OnInit{

  comanda!: ComandaResponse | null;

  constructor(private readonly route: ActivatedRoute,
              private readonly router: Router,
              private readonly comandaService: ComandaService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['id']) {
        lastValueFrom(this.comandaService.get(params['id'])).then(comanda => {
          if (comanda) {
            this.comanda = comanda;
            console.log(this.comanda);
          }
        });
      }
    })
  }

  protected readonly ComandaStatus = ComandaStatus;

  fecharComanda() {
    if (this.comanda) {
      this.comandaService.fechar(this.comanda.id).subscribe({
        next: (response) => {
          console.log(response);
          //TODO implements toast
          this.router.navigate(['../..'], { relativeTo: this.route });
        },
        error: (error) => {
          console.log(error);
          //TODO implements toast
        }
      })
    }
  }
}
