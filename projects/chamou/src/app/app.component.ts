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
import {ItemPedido} from "./interfaces/item/item-pedido.interface";
import {PedidoCreateRequest} from "./interfaces/pedido/pedido-create-request.interface";
import {Comanda} from "./interfaces/comanda/comanda.interface";
import {ComandaService} from "./services/comanda.service";
import {PedidoService} from "./services/pedido.service";
import {PedidoCreateResponse} from "./interfaces/pedido/pedido-create-response.interface";
import {ComandaModalInput} from "./interfaces/modal/comanda-modal-input.interface";
import {ItemModalOutput} from "./interfaces/modal/item-modal-output.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'chamou-monorepo';
  carrinho!: CarrinhoInterface;
  comanda!: string;
  pedido!: PedidoCreateResponse;
  precoPedidoAtual: number = 0;

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
    this.initPreco();
  }

  initComanda() {
    this.comanda = this._localstorage.getItem("chamou.comanda");
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

  initPreco() {
    if (this.carrinho.itens.length > 0) {
      this.precoPedidoAtual = this.carrinho.itens
        .reduce((accumulator, item) => accumulator + (item.preco * item.quantidade), 0);
    }
  }

  clearVariables() {
    this.clearCarrinho();
    this.precoPedidoAtual = 0;
  }

  clearCarrinho() {
    this.carrinho.itens = [];
    this._localstorage.removeItem("chamou.carrinho");
  }

  clearComanda() {
    this.comanda = "";
    this._localstorage.removeItem("chamou.comanda");
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
        this.updatePreco(itemModalInput);
        this.carrinho.itens.push(itemModalOutput);
        this._localstorage.setItem("chamou.carrinho", this.carrinho);
      }
      console.log(this.carrinho);
    })
  }

  updatePreco(itemModalOutput: ItemModalOutput) {
    this.precoPedidoAtual += (itemModalOutput.preco * itemModalOutput.quantidade);
  }

  onNavbarButtonClick(event: string) {

    this._modalService.closeAll();

    switch (event) {
      case "avaliacao": {
        let data: GenericModalInput;
        data = {
          titulo: 'Avaliação',
          hasFullSize: true,
          footer: this.avaliacaoTemplate
        } as GenericModalInput;
        this._modalService.openGenericModal(data);
        break;
      }

      case "garcom": {
        let data: GenericModalInput;

        data = {
          titulo: 'Garçom',
          hasFullSize: true,
          footer: this.garcomTemplate
        } as GenericModalInput;
        this._modalService.openGenericModal(data);
        break;
      }

      case "comanda": {
        let data: ComandaModalInput;

        data = {
          comandaId: this.comanda
        } as ComandaModalInput;
        const comandaModal =  this._modalService.openComandaModal(data);

        comandaModal.afterClosed().subscribe(fecharComanda => {
          if (fecharComanda) {
            this.clearComanda();
          }
        });
        break;
      }

      default: {
        let data: GenericModalInput;
        data = {
          titulo: 'Default',
          hasFullSize: true,
        } as GenericModalInput;
      }
    }
  }

  onCartClick() {
    const data: CarrinhoModalInput = {
      carrinho: this.carrinho,
      precoPedidoAtual: this.precoPedidoAtual,
      titulo: "Carrinho"
    } as CarrinhoModalInput;

    this._modalService.openCarrinhoModal(data)
      .afterClosed().subscribe(preco => {
        if (preco) {
          // TODO quando for possivel fazer o pedido com esta modal aberta, a lógica terá que ser outra (two-way-data-binding??);
          this.precoPedidoAtual = preco;
        }
    })
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
          const itens: ItemPedido[] = this.carrinho.itens.map((item) => {
            return {
              itemModeloId: item.itemModeloId,
              quantidade: item.quantidade,
              opcaoPersonalizadaValores: item.customizacoes } as ItemPedido;
          });

          console.log(itens);

          if (!this.comanda) {
            this.createComanda()
              .then(() => this.createPedido(itens))
              .then(pedido => {
                console.log(pedido);
                this.clearVariables();
              });
          } else {
            this.createPedido(itens)
              .then(pedido => {
                console.log(pedido);
                this.clearVariables();
              });
          }
        }
    });
  }

  async createPedido(itens: ItemPedido[]): Promise<PedidoCreateResponse> {
    const pedido: PedidoCreateRequest = {
      comandaId: this.comanda,
      precoTotal: this.precoPedidoAtual,
      itens: itens
    } as PedidoCreateRequest;

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
