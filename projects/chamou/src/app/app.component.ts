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
import {AvaliacaoModalInput} from "./interfaces/modal/avaliacao-modal-input.interface";
import {GarcomModalComponent} from "./components/modals/garcom-modal/garcom-modal.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
