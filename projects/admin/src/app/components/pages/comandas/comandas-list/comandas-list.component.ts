import {Component, OnInit} from '@angular/core';
import {ComandaService} from "../../../../services/comanda.service";
import {ComandaList} from "../../../../interfaces/comanda-list.interface";
import {ComandaStatus} from "../../../../constants/comanda-status.enum";

@Component({
  selector: 'app-comandas-list',
  templateUrl: './comandas-list.component.html',
  styleUrl: './comandas-list.component.scss'
})
export class ComandasListComponent implements OnInit{

  comandas!: ComandaList[];

  constructor(private comandaService: ComandaService) { }

  ngOnInit() {
    this.comandaService.list().subscribe(comandas => {
      this.comandas = comandas;
    });
  }

  protected readonly ComandaStatus = ComandaStatus;

  abrirComanda(comandaId: string) {
    if (comandaId) {
      this.comandaService.abrir(comandaId).subscribe({
        next: (response) => {
          console.log(response);
          //TODO implements toast
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error);
          //TODO implements toast
        }
      })
    }
  }

  fecharComanda(comandaId: string) {
    if (comandaId) {
      this.comandaService.fechar(comandaId).subscribe({
        next: (response) => {
          console.log(response);
          //TODO implements toast
          this.ngOnInit()
        },
        error: (error) => {
          console.log(error);
          //TODO implements toast
        }
      })
    }
  }

  pagarComanda(comandaId: string) {
    if (comandaId) {
      this.comandaService.pagar(comandaId).subscribe({
        next: (response) => {
          console.log(response);
          //TODO implements toast
          this.ngOnInit();
        },
        error: (error) => {
          console.log(error);
          //TODO implements toast
        }
      })
    }
  }
}
