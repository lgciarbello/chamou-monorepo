import {Component, OnInit} from '@angular/core';
import {ItemModeloService} from "../../../../services/item-modelo.service";
import {Observable} from "rxjs";
import {ItemModelo} from "../../../../../../../chamou/src/app/interfaces/item/item-modelo.interface";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-itens-list',
  templateUrl: './itens-list.component.html',
  styleUrl: './itens-list.component.scss'
})
export class ItensListComponent implements OnInit{

  itens$!: Observable<ItemModelo[]>;

  constructor(private readonly _itemModeloService: ItemModeloService,
              private readonly _route: ActivatedRoute,
              private readonly _router: Router) {}

  ngOnInit() {
    this.itens$ = this._itemModeloService.list().pipe();
  }

  onItemClick(event: string) {
    this._router.navigate(['item', event], { relativeTo: this._route });
  }

}
