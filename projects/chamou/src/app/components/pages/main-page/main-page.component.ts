import {Component, OnInit} from '@angular/core';
import {CarrinhoInterface} from "../../../interfaces/carrinho/carrinho.interface";
import {PedidoCreateResponse} from "../../../interfaces/pedido/pedido-create-response.interface";
import {lastValueFrom, Observable} from "rxjs";
import {CardapioResponse} from "../../../interfaces/cardapio/cardapio-response.interface";
import {CategoriaResponse} from "../../../interfaces/categoria/categoria-response-interface";
import {FaIconLibrary} from "@fortawesome/angular-fontawesome";
import {CardapioService} from "../../../services/cardapio.service";
import {ModalService} from "../../../services/modal.service";
import {CategoriaService} from "../../../services/categoria.service";
import {ComandaService} from "../../../services/comanda.service";
import {PedidoService} from "../../../services/pedido.service";
import {LocalStorageService} from "../../../services/localstorage.service";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {ItemModalInput} from "../../../interfaces/modal/item-modal-input.interface";
import {ItemModelo} from "../../../interfaces/item/item-modelo.interface";
import {ItemModalOutput} from "../../../interfaces/modal/item-modal-output.interface";
import {GarcomModalComponent} from "../../modals/garcom-modal/garcom-modal.component";
import {ComandaModalInput} from "../../../interfaces/modal/comanda-modal-input.interface";
import {GenericModalInput} from "../../../interfaces/modal/generic-modal-input.interface";
import {CarrinhoModalInput} from "../../../interfaces/modal/carrinho-modal-input.interface";
import {AlertModalInput} from "../../../interfaces/modal/alert-modal-input.interface";
import {ItemPedido} from "../../../interfaces/item/item-pedido.interface";
import {PedidoCreateRequest} from "../../../interfaces/pedido/pedido-create-request.interface";
import {Comanda} from "../../../interfaces/comanda/comanda.interface";
import {MesaResponse} from "../../../interfaces/mesa/mesa-response.interface";
import {IdNameMap} from "../../../interfaces/generic/id-name-map.interface";
import {ComandaNomeModalComponent} from "../../modals/comanda-nome-modal/comanda-nome-modal.component";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit {
  title = 'chamou-monorepo';
  carrinho!: CarrinhoInterface;
  comanda!: string;
  pedido!: PedidoCreateResponse;
  precoPedidoAtual: number = 0;
  mesa!: MesaResponse;

  cardapio!: CardapioResponse;
  filteredCardapio!: CardapioResponse;
  categorias$!: Observable<CategoriaResponse[]>;

  searchControl!: FormControl;

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
    this._cardapioService.getAll().subscribe(cardapio => {
      this.cardapio = cardapio;
      this.filteredCardapio = JSON.parse(JSON.stringify(this.cardapio)) as CardapioResponse;
    });
    this.categorias$ = this._categoriaService.list();

    this.initComanda();
    this.initMesa();
    this.initCarrinho();
    this.initPreco();

    this.searchControl = new FormControl();
    this.searchControl.valueChanges.subscribe(value => {
      // deep copy
      const filteredAux = JSON.parse(JSON.stringify(this.cardapio)) as CardapioResponse;

      if (value === "") {
        this.filteredCardapio = filteredAux;
        return;
      }

      filteredAux.categorias.forEach(categoria => {
        categoria.itensModelo = categoria.itensModelo.filter(item => item.nome.toLowerCase().includes(value.toLowerCase()));
      })
      filteredAux.categorias = filteredAux.categorias
        .filter(categoria => categoria.itensModelo.length > 0);

      const filteredJSON = JSON.stringify(this.filteredCardapio);
      const auxJSON = JSON.stringify(filteredAux)

      if (auxJSON === filteredJSON) {
        return;
      }

      this.filteredCardapio = filteredAux;
    })
  }

  initComanda() {
    this.comanda = this._localstorage.getItem("chamou.comanda");
    console.log(this.comanda);
  }

  initMesa() {
    this.mesa = this._localstorage.getItem("chamou.mesa");
    console.log("mesa: ", this.mesa);
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
        this._modalService.openAvaliacaoModal(null);
        break;
      }

      case "garcom": {
        this._modalService.openAny(GarcomModalComponent, null);
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
      if (preco || preco >= 0) {
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
          this._modalService.openAny(ComandaNomeModalComponent, null)
            .afterClosed().subscribe(nome => {
              if (nome) {
                console.log("Nome: ", nome);

                this.createComanda(nome)
                  .then(() => this.createPedido(itens))
                  .then(pedido => {
                    console.log(pedido);
                    this.clearVariables();
                  });
              }
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

  async createComanda(nome: string): Promise<Comanda> {
    const mesa: IdNameMap = {
      id: this.mesa.id,
      name: this.mesa.numero
    };

    const comanda: Comanda = {
      cliente: nome,
      id: this.comanda,
      mesa: mesa
    } as Comanda;

    console.log("Comanda: ", comanda);

    const comandaResponse$ = this._comandaService.create(comanda);

    return await lastValueFrom(comandaResponse$)
      .then(comanda => {
        this._localstorage.setItem("chamou.comanda", comanda.id);
        this.comanda = comanda.id;
        return comanda;
      });
  }
}
