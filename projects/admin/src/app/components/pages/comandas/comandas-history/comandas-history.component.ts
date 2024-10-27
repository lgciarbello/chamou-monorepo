import {Component, OnInit} from '@angular/core';
import {ComandaList} from "../../../../interfaces/comanda-list.interface";
import {ComandaService} from "../../../../services/comanda.service";

@Component({
  selector: 'app-comandas-history',
  templateUrl: './comandas-history.component.html',
  styleUrl: './comandas-history.component.scss'
})
export class ComandasHistoryComponent implements OnInit {

  comandas!: ComandaList[];

  constructor(private comandaService: ComandaService) { }

  ngOnInit() {
    this.comandaService.historico().subscribe(comandas => {
      this.comandas = comandas;
    });
  }

}
