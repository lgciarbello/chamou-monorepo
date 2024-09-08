import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {FaIconLibrary} from '@fortawesome/angular-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons';
import {CardapioService} from "./services/cardapio.service";
import {lastValueFrom, Observable} from "rxjs";
import {CardapioResponse} from "./interfaces/cardapio/cardapio-response.interface";
import {ItemModelo} from "./interfaces/item/item-modelo.interface";
import {ModalService} from "./services/modal.service";
import {ItemModalInput} from "./interfaces/modal/item-modal-input.interface";
import {GenericModalInput} from "./interfaces/modal/generic-modal-input.interface";
import {CategoriaResponse} from "./interfaces/categoria/categoria-response-interface";
import {CategoriaService} from "./services/categoria.service";
import {CarrinhoInterface} from "./interfaces/carrinho/carrinho.interface";
import {LocalStorageService} from "./services/localstorage.service";
import {CarrinhoModalInput} from "./interfaces/modal/carrinho-modal-input.interface";
import {MatDialogRef} from "@angular/material/dialog";
import {AlertModalInput} from "./interfaces/modal/alert-modal-input.interface";
import {Item} from "./interfaces/item/item.interface";
import {PedidoRequest} from "./interfaces/pedido/pedido-request.interface";
import {Comanda} from "./interfaces/comanda/comanda.interface";
import {ComandaService} from "./services/comanda.service";
import {PedidoService} from "./services/pedido.service";
import {PedidoResponse} from "./interfaces/pedido/pedido-response.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chamou-monorepo';
  carrinho!: CarrinhoInterface;
  comanda!: string;
  pedido!: PedidoResponse;

  cardapio$!: Observable<CardapioResponse>;
  categorias$!: Observable<CategoriaResponse[]>;

  currentModal!: MatDialogRef<any>;

  @ViewChild('avaliacaoTemplate') avaliacaoTemplate!: TemplateRef<any>;
  @ViewChild('garcomTemplate') garcomTemplate!: TemplateRef<any>;
  @ViewChild('contaTemplate') contaTemplate!: TemplateRef<any>;
  @ViewChild('carrinhoTemplate') carrinhoTemplate!: TemplateRef<any>;

  constructor(library: FaIconLibrary,
              private readonly _cardapioService: CardapioService,
              private readonly _modalService: ModalService,
              private readonly _categoriaService: CategoriaService,
              private readonly _comandaService: ComandaService,
              private readonly _pedidoService: PedidoService,
              private readonly _localstorage: LocalStorageService) {
    library.addIconPacks(fas);
  }

  ngOnInit() {
    this.cardapio$ = this._cardapioService.getAll();
    this.categorias$ = this._categoriaService.list();

    this.initComanda();
    this.initCarrinho();
  }

  initComanda() {
    this.comanda = this._localstorage.getItem("chamou.comanda");

    // if (!this.comanda) {
    //   this.comanda = uuid();
    //   this._localstorage.setItem("chamou.comanda", this.comanda);
    // }

    console.log(this.comanda);
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

  clearCarrinho() {
    this.carrinho.itens = [];
    this._localstorage.setItem("chamou.carrinho", this.carrinho);
  }

  onItemCardClick(event: ItemModelo) {
    console.log(event);

    const itemModalInput: ItemModalInput = {
      descricao: event.descricao,
      itemModeloId: event.id || "",
      imagePath: event.foto || "",
      preco: event.preco,
      titulo: event.nome,
      tituloBotao: "Adicionar",
      quantidade: 0,
    } as ItemModalInput;

    const itemModal = this._modalService.openItemModal(itemModalInput);

    itemModal.afterClosed().subscribe(itemModalOutput => {
      if (itemModalOutput && itemModalOutput.quantidade > 0) {
        this.carrinho.itens.push(itemModalOutput);
        this._localstorage.setItem("chamou.carrinho", this.carrinho);
      }
      console.log(this.carrinho);
    })
  }

  onNavbarButtonClick(event: string) {
    let data: GenericModalInput;

    this._modalService.closeAll();

    switch (event) {
      case "avaliacao": {
        data = {
          titulo: 'Avaliação',
          hasFullSize: true,
          footer: this.avaliacaoTemplate
        } as GenericModalInput;
        break;
      }

      case "garcom": {
        data = {
          titulo: 'Garçom',
          hasFullSize: true,
          footer: this.garcomTemplate
        } as GenericModalInput;
        break;
      }

      case "conta": {
        data = {
          titulo: 'Conta',
          hasFullSize: true,
          footer: this.contaTemplate
        } as GenericModalInput;
        break;
      }

      default: {
        data = {
          titulo: 'Default',
          hasFullSize: true,
        } as GenericModalInput;
      }
    }

    this._modalService.openGenericModal(data);
  }

  onCartClick() {
    const data: CarrinhoModalInput = {
      carrinho: this.carrinho,
      titulo: "Carrinho"
    } as CarrinhoModalInput;

    this._modalService.openCarrinhoModal(data);
  }

  onPedidoButtonClick() {
    const data: AlertModalInput = {
      title: 'Pedido',
      icon: "question-circle",
      message: "Deseja confirmar o seu pedido?",
      buttonAcceptText: "Confirmar",
      buttonDeclineText: "Cancelar",
    } as AlertModalInput;

    this._modalService.openAlertModal(data)
      .afterClosed().subscribe(isAccept => {
        if (isAccept) {
          const itens: Item[] = this.carrinho.itens.map((item) => {
            return {
              itemModeloId: item.itemModeloId,
              quantidade: item.quantidade,
              opcaoPersonalizadaValores: item.customizacoes } as Item;
          });

          console.log(itens);

          if (!this.comanda) {
            this.createComanda()
              .then(() => this.createPedido(itens))
              .then(pedido => {
                console.log(pedido);
                this.clearCarrinho();
              });
          } else {
            this.createPedido(itens)
              .then(pedido => {
                console.log(pedido);
                this.clearCarrinho();
              });
          }
        }
    });
  }

  async createPedido(itens: Item[]): Promise<PedidoResponse> {
    const pedido: PedidoRequest = {
      comandaId: this.comanda,
      itens: itens
    } as PedidoRequest;

    const pedidoResponse$ = this._pedidoService.create(pedido);

    return await lastValueFrom(pedidoResponse$)
  }

  async createComanda(): Promise<Comanda> {
    const comanda: Comanda = {
      cliente: "João", id: this.comanda
    } as Comanda;

    const comandaResponse$ = this._comandaService.create(comanda);

    return await lastValueFrom(comandaResponse$)
      .then(comanda => {
        this._localstorage.setItem("chamou.comanda", comanda.id);
        this.comanda = comanda.id;
        return comanda;
      });
  }




}
