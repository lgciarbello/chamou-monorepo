import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {CardapioService} from "./services/cardapio.service";
import {Observable} from "rxjs";
import {CardapioResponse} from "./interfaces/cardapio-response.interface";
import {ItemModelo} from "./interfaces/item-modelo.interface";
import {ItemModalComponent} from "./components/item-modal/item-modal.component";
import {ModalService} from "./services/modal.service";
import {ItemModalInput} from "./interfaces/item-modal-input.interface";
import {GenericModalComponent} from "./components/generic-modal/generic-modal.component";
import {GenericModalInput} from "./interfaces/generic-modal-input.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chamou-monorepo';
  cardapio$!: Observable<CardapioResponse>;

  @ViewChild('avaliacao') avaliacao!: TemplateRef<any>;
  @ViewChild('garcom') garcom!: TemplateRef<any>;
  @ViewChild('conta') conta!: TemplateRef<any>;
  @ViewChild('carrinho') carrinho!: TemplateRef<any>;
  @ViewChild('itensCarrinho') itensCarrinho!: TemplateRef<any>;

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

    const itemModalInput: ItemModalInput = {
      descricao: event.descricao,
      id: event.id || "",
      imagePath: event.foto || "",
      preco: event.preco,
      titulo: event.nome
    } as ItemModalInput;

    this._modalService.openItemModal(itemModalInput);
  }

  onNavbarButtonClick(event: string) {
    let data: GenericModalInput;

    switch (event) {
      case "avaliacao": {
        data = {
          titulo: 'Avaliação',
          footer: this.avaliacao
        } as GenericModalInput;
        break;
      }

      case "garcom": {
        data = {
          titulo: 'Garçom',
          footer: this.garcom
        } as GenericModalInput;
        break;
      }

      case "conta": {
        data = {
          titulo: 'Conta',
          footer: this.conta
        } as GenericModalInput;
        break;
      }

      default: {
        data = {
          titulo: 'Default',
        } as GenericModalInput;
      }
    }

    this._modalService.openGenericModal(data);
  }

  onCartClick() {
    const data: GenericModalInput = {
      titulo: 'Carrinho',
      content: this.itensCarrinho,
      footer: this.carrinho,

    } as GenericModalInput;

    this._modalService.openGenericModal(data);
  }




}
