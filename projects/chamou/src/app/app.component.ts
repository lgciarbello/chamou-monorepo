import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {CardapioService} from "./services/cardapio.service";
import {Observable} from "rxjs";
import {CardapioResponse} from "./interfaces/cardapio/cardapio-response.interface";
import {ItemModelo} from "./interfaces/item/item-modelo.interface";
import {ModalService} from "./services/modal.service";
import {ItemModalInput} from "./interfaces/modal/item-modal-input.interface";
import {GenericModalInput} from "./interfaces/modal/generic-modal-input.interface";
import {CategoriaResponse} from "./interfaces/categoria/categoria-response-interface";
import {CategoriaService} from "./services/categoria.service";
import {CarrinhoInterface} from "./interfaces/carrinho/carrinho.interface";
import {LocalStorageService} from "./services/localstorage.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chamou-monorepo';

  cardapio$!: Observable<CardapioResponse>;
  categorias$!: Observable<CategoriaResponse[]>;

  carrinho!: CarrinhoInterface;

  @ViewChild('avaliacaoTemplate') avaliacaoTemplate!: TemplateRef<any>;
  @ViewChild('garcomTemplate') garcomTemplate!: TemplateRef<any>;
  @ViewChild('contaTemplate') contaTemplate!: TemplateRef<any>;
  @ViewChild('carrinhoTemplate') carrinhoTemplate!: TemplateRef<any>;
  @ViewChild('itensCarrinho') itensCarrinho!: TemplateRef<any>;

  constructor(library: FaIconLibrary,
              private readonly _cardapioService: CardapioService,
              private readonly _modalService: ModalService,
              private readonly _categoriaService: CategoriaService,
              private readonly _localstorage: LocalStorageService) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.cardapio$ = this._cardapioService.getAll();
    this.categorias$ = this._categoriaService.list();

    this.initCarrinho();
  }

  initCarrinho() {
    this.carrinho = this._localstorage.getItem("chamou.carrinho") as CarrinhoInterface;

    if (!this.carrinho) {
      this.carrinho = {
        itens: [] as ItemModalInput[]
      } as CarrinhoInterface;
    }

    console.log(this.carrinho);
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

    const itemModal = this._modalService.openItemModal(itemModalInput);

    itemModal.afterClosed().subscribe(itemModalInput => {
      if (itemModalInput && itemModalInput.quantidade > 0) {
        this.carrinho.itens.push(itemModalInput);
        this._localstorage.setItem("chamou.carrinho", this.carrinho);
      }
      console.log(this.carrinho);
    })
  }

  onNavbarButtonClick(event: string) {
    let data: GenericModalInput;

    switch (event) {
      case "avaliacao": {
        data = {
          titulo: 'Avaliação',
          footer: this.avaliacaoTemplate
        } as GenericModalInput;
        break;
      }

      case "garcom": {
        data = {
          titulo: 'Garçom',
          footer: this.garcomTemplate
        } as GenericModalInput;
        break;
      }

      case "conta": {
        data = {
          titulo: 'Conta',
          footer: this.contaTemplate
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
      footer: this.carrinhoTemplate,

    } as GenericModalInput;

    this._modalService.openGenericModal(data);
  }




}
