import {Component, OnInit} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {CardapioService} from "./services/cardapio.service";
import {Observable} from "rxjs";
import {CardapioResponse} from "./interfaces/cardapio-response.interface";
import {ItemModelo} from "./interfaces/item-modelo.interface";
import {ItemModalComponent} from "./components/item-modal/item-modal.component";
import {ModalService} from "./services/modal.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chamou-monorepo';
  cardapio$!: Observable<CardapioResponse>;

  constructor(library: FaIconLibrary,
              private readonly _cardapioService: CardapioService,
              private readonly _modalService: ModalService) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.cardapio$ = this._cardapioService.getAll();
  }

  onItemCardClick(event: ItemModelo) {
    console.log(event);
    this._modalService.open(ItemModalComponent, event);
  }




}
