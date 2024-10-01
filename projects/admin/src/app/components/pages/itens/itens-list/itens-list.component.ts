import {Component, OnInit} from '@angular/core';
import {ItemModeloService} from "../../../../services/item-modelo.service";
import {Observable} from "rxjs";
import {ItemModelo} from "../../../../../../../chamou/src/app/interfaces/item/item-modelo.interface";

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrl: './itens-list.component.scss'
})
export class ItensListComponent implements OnInit{

  itens$!: Observable<ItemModelo[]>;

  constructor(private readonly _itemModeloService: ItemModeloService) {}

  ngOnInit() {
    this.itens$ = this._itemModeloService.list();
  }

  onItemClick() {

  }

}
